import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDonki } from "../../hooks/use-donki";
import useEpic from "../../hooks/use-epic";
import { useGetData } from "../../hooks/use-get-data";
import useLimits from "../../hooks/use-limits";
import { useRover } from "../../hooks/use-rover";
import { useTechTransfer } from "../../hooks/use-techtransfer";
import Apod from "../apod/apod";
import Donki from "../donki/donki";
import Epic from "../epic/epic";
import Home from "../home/home";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import Rover from "../rover/rover";
import Techport from "../techport/techport";
import Techtransfer from "../techtransfer/techtransfer";


export default function Routing(): ReactElement {
  const { apod, epic, epicAll, techport } = useGetData();
  const [techtransfer, handleChangeTechtransfer, error] = useTechTransfer();
  const [roverData, isClickedRover, handleInputRover, handleClickRover] = useRover();
  const [donki, startDate, endDate, maxDate, handleChangeDonki, handleSubmitDonki, useInitialDonki] = useDonki();
  useInitialDonki();
  const [currentEpic, indexEpic, messageEpic, handlePrevClickEpic, handleNextClickEpic,
    resultsEpic, handleChangeEpic, displayEpic, handleClickResultEpic] = useEpic(epic, epicAll);

  //Limited states -> loading on scroll
  const [limitedApod, handleScrollApod] = useLimits(apod, 350);
  const [limitedTechTransfer, handleScrollTechtransfer] = useLimits(techtransfer, 350)
  const [limitedTechRoverData, handleScrollRover] = useLimits(roverData.photos, 350)

  return (
    <Switch>
      <Route path='/techtransfer'>
        <Techtransfer results={limitedTechTransfer} handleScroll={handleScrollTechtransfer}
          handleChange={handleChangeTechtransfer} error={error} />
      </Route>

      <Route path='/techport/:projectId'>
        <Techport />
      </Route>

      <Route path='/rover'>
        <Rover roverData={limitedTechRoverData} isClicked={isClickedRover}
          handleInput={handleInputRover} handleClick={handleClickRover}
          handleScroll={handleScrollRover} />
      </Route>

      <Route path='/epic'>
        {epic && epicAll ? <Epic currentEpic={currentEpic} index={indexEpic} message={messageEpic}
          handlePrevClick={handlePrevClickEpic} handleNextClick={handleNextClickEpic}
          results={resultsEpic} handleChange={handleChangeEpic} display={displayEpic}
          handleClickResult={handleClickResultEpic} /> : <LoadingSpinner />}
      </Route>

      <Route path='/donki'>
        {donki ? <Donki
          donki={donki}
          startDate={startDate}
          endDate={endDate}
          maxDate={maxDate}
          handleChange={handleChangeDonki}
          handleSubmit={handleSubmitDonki}
        /> : <LoadingSpinner />}
      </Route>

      <Route path='/apod'>
        {apod ? <Apod apod={limitedApod} handleScroll={handleScrollApod} /> : <LoadingSpinner />}
      </Route>

      <Route path='/home'>
        {techport && <Home techport={techport} />}
      </Route>

      <Route path=''>
        <Redirect to="/home" />
      </Route>
    </Switch >
  );
}