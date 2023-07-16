export const getSecondsDiff = (timeA: Date, timeB = new Date()) => {
  const secondsDiff = Math.floor((Math.abs(timeA.getTime() - timeB.getTime()) / 1000));
  return secondsDiff;
};

export const getMinuteDiff = (timeA: Date, timeB = new Date()) => {
  const minutesDiff = Math.floor(getSecondsDiff(timeA, timeB) / 60);
  return minutesDiff;
};

export const getHourDiff = (timeA: Date, timeB=new Date()) => {
  const hourDiff =  Math.floor(getMinuteDiff(timeA, timeB) / 60);
  return hourDiff
};

export const getDayDiff = (timeA: Date, timeB = new Date()) => {
  const hourDiff =  Math.floor(getHourDiff(timeA, timeB) / 24);
  return hourDiff
}

export const getTimeDiffToKorean = (timeA: Date, timeB?: Date)=>{
  const secondsDiff = getSecondsDiff(timeA, timeB) % 60;
  const minuteDiff = getMinuteDiff(timeA, timeB) % 60;
  const hourDiff = getHourDiff(timeA, timeB) % 60;
  const dayDiff = getDayDiff(timeA, timeB);

  if(dayDiff) return `${dayDiff}일 전`;
  if(hourDiff) return `${hourDiff}시간 전`;
  if(minuteDiff) return `${minuteDiff}분 전`;
  return `${secondsDiff}초 전`;
}