export class Alarm {
  constructor(
    id,
    hours,
    minutes,
    meridiem,
    days,
    hasPhrases,
    hasChallenges,
    hasMusic
  ) {
    this.id = id;
    this.hours = hours;
    this.minutes = minutes;
    this.days = days;
    this.meridiem = meridiem;
    this.hasPhrases = hasPhrases;
    this.hasChallenges = hasChallenges;
    this.hasMusic = hasMusic;
  }
}
