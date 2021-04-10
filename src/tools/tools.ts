/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Fetching tools
export function fetchPost(path: string, data: any): Promise<any> {
  return fetch(path, {
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
  const hundredDays = (100 * 24 * 60 * 60 * 1000);
  const hundredDaysbeforeYesterdayDate = new Date(currentTime - hundredDays);

  const hundredDaysbeforeYesterdayDateObj = {
    year: `${hundredDaysbeforeYesterdayDate.getFullYear()}`,
    month: `${hundredDaysbeforeYesterdayDate.getMonth()}`,
    day: `${hundredDaysbeforeYesterdayDate.getDate()}`
  };
  const yesterdayObj = {
    year: `${yesterday.getFullYear()}`,
    month: `${yesterday.getMonth()}`,
    day: `${yesterday.getDate()}`
  };
  //Daten formattieren
  if (Number(yesterdayObj.month) < 10) yesterdayObj.month = `0${yesterdayObj.month}`;
  if (Number(yesterdayObj.day) < 10) yesterdayObj.day = `0${yesterdayObj.day}`;
  if (Number(hundredDaysbeforeYesterdayDateObj.month) < 10)
    hundredDaysbeforeYesterdayDateObj.month = `0${hundredDaysbeforeYesterdayDateObj.month}`;
  if (Number(hundredDaysbeforeYesterdayDateObj.day) < 10)
    hundredDaysbeforeYesterdayDateObj.day = `0${hundredDaysbeforeYesterdayDateObj.day}`;

  const yesterdayString = `${yesterdayObj.year}-${yesterdayObj.month}-${yesterdayObj.day}`;
  const hundredDaysbeforeYesterdayDateString =
    `${hundredDaysbeforeYesterdayDateObj.year}-${hundredDaysbeforeYesterdayDateObj.month}-${hundredDaysbeforeYesterdayDateObj.day}`;

  return [yesterdayString, hundredDaysbeforeYesterdayDateString];
}