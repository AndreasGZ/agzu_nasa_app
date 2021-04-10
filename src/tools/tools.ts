/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Fetching tools
export function fetchPost(path: string, data: any): Promise<any> {
  return fetch(`https://nasa-agzu.herokuapp.com${path}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).catch(error => console.log(error))
}

export function fetchGet(path: string): Promise<any> {
  return fetch(path).then(response => response.json()).catch(error => console.log(error))
}

// Donki Datum initialisieren
export const getInitialInterval = (): string[] => {
  //Gibt die Daten für die letzten 100 Tage seit gestern zurück
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  const oneDay = (24 * 60 * 60 * 1000);
  const yesterday = new Date(currentTime - oneDay);
  const thirdyDays = (30 * 24 * 60 * 60 * 1000);
  const thirdyDaysbeforeYesterdayDate = new Date(currentTime - thirdyDays);

  const thirdyDaysbeforeYesterdayDateObj = {
    year: `${thirdyDaysbeforeYesterdayDate.getFullYear()}`,
    month: `${thirdyDaysbeforeYesterdayDate.getMonth() + 1}`,
    day: `${thirdyDaysbeforeYesterdayDate.getDate()}`
  };
  const yesterdayObj = {
    year: `${yesterday.getFullYear()}`,
    month: `${yesterday.getMonth() + 1}`,
    day: `${yesterday.getDate()}`
  };
  //Daten formattieren
  if (Number(yesterdayObj.month) < 10) yesterdayObj.month = `0${yesterdayObj.month}`;
  if (Number(yesterdayObj.day) < 10) yesterdayObj.day = `0${yesterdayObj.day}`;
  if (Number(thirdyDaysbeforeYesterdayDateObj.month) < 10)
    thirdyDaysbeforeYesterdayDateObj.month = `0${thirdyDaysbeforeYesterdayDateObj.month}`;
  if (Number(thirdyDaysbeforeYesterdayDateObj.day) < 10)
    thirdyDaysbeforeYesterdayDateObj.day = `0${thirdyDaysbeforeYesterdayDateObj.day}`;

  const yesterdayString = `${yesterdayObj.year}-${yesterdayObj.month}-${yesterdayObj.day}`;
  const thirdyDaysbeforeYesterdayDateString =
    `${thirdyDaysbeforeYesterdayDateObj.year}-${thirdyDaysbeforeYesterdayDateObj.month}-${thirdyDaysbeforeYesterdayDateObj.day}`;

  return [yesterdayString, thirdyDaysbeforeYesterdayDateString];
}