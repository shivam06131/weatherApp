import { ICustomCardProps } from "../type";

export const customCardPropsMock : ICustomCardProps = {
  // dailyWeatherData: [
  //   {
  //     time: "2023-04-27T01:00",
  //     temperature: 24.7,
  //   },
  //   {
  //     time: "2023-04-27T02:00",
  //     temperature: 24.3,
  //   },
  //   {
  //     time: "2023-04-27T03:00",
  //     temperature: 25.6,
  //   },
  //   {
  //     time: "2023-04-27T04:00",
  //     temperature: 27.9,
  //   },
  //   {
  //     time: "2023-04-27T05:00",
  //     temperature: 30.2,
  //   },
  //   {
  //     time: "2023-04-27T06:00",
  //     temperature: 32.3,
  //   },
  //   {
  //     time: "2023-04-27T07:00",
  //     temperature: 33.8,
  //   },
  //   {
  //     time: "2023-04-27T08:00",
  //     temperature: 35.5,
  //   },
  //   {
  //     time: "2023-04-27T09:00",
  //     temperature: 36.7,
  //   },
  //   {
  //     time: "2023-04-27T10:00",
  //     temperature: 37.5,
  //   },
  //   {
  //     time: "2023-04-27T11:00",
  //     temperature: 37.4,
  //   },
  //   {
  //     time: "2023-04-27T12:00",
  //     temperature: 37.1,
  //   },
  //   {
  //     time: "2023-04-27T13:00",
  //     temperature: 36.4,
  //   },
  //   {
  //     time: "2023-04-27T14:00",
  //     temperature: 35.4,
  //   },
  //   {
  //     time: "2023-04-27T15:00",
  //     temperature: 33.8,
  //   },
  //   {
  //     time: "2023-04-27T16:00",
  //     temperature: 32.8,
  //   },
  //   {
  //     time: "2023-04-27T17:00",
  //     temperature: 31.2,
  //   },
  //   {
  //     time: "2023-04-27T18:00",
  //     temperature: 30.2,
  //   },
  //   {
  //     time: "2023-04-27T19:00",
  //     temperature: 29.5,
  //   },
  //   {
  //     time: "2023-04-27T20:00",
  //     temperature: 28.9,
  //   },
  //   {
  //     time: "2023-04-27T21:00",
  //     temperature: 28.5,
  //   },
  //   {
  //     time: "2023-04-27T22:00",
  //     temperature: 27.5,
  //   },
  //   {
  //     time: "2023-04-27T23:00",
  //     temperature: 26.8,
  //   },
  //   {
  //     time: "2023-04-28T00:00",
  //     temperature: 26.3,
  //   },
  //   {
  //     time: "2023-04-28T01:00",
  //     temperature: 25.9,
  //   },
  //   {
  //     time: "2023-04-28T02:00",
  //     temperature: 25.5,
  //   },
  //   {
  //     time: "2023-04-28T03:00",
  //     temperature: 25.7,
  //   },
  //   {
  //     time: "2023-04-28T04:00",
  //     temperature: 27.5,
  //   },
  //   {
  //     time: "2023-04-28T05:00",
  //     temperature: 29.5,
  //   },
  //   {
  //     time: "2023-04-28T06:00",
  //     temperature: 32,
  //   },
  //   {
  //     time: "2023-04-28T07:00",
  //     temperature: 34,
  //   },
  //   {
  //     time: "2023-04-28T08:00",
  //     temperature: 35.4,
  //   },
  //   {
  //     time: "2023-04-28T09:00",
  //     temperature: 36.4,
  //   },
  //   {
  //     time: "2023-04-28T10:00",
  //     temperature: 37.1,
  //   },
  //   {
  //     time: "2023-04-28T11:00",
  //     temperature: 37.4,
  //   },
  //   {
  //     time: "2023-04-28T12:00",
  //     temperature: 37,
  //   },
  //   {
  //     time: "2023-04-28T13:00",
  //     temperature: 36.3,
  //   },
  //   {
  //     time: "2023-04-28T14:00",
  //     temperature: 35.7,
  //   },
  //   {
  //     time: "2023-04-28T15:00",
  //     temperature: 33.7,
  //   },
  //   {
  //     time: "2023-04-28T16:00",
  //     temperature: 32.6,
  //   },
  //   {
  //     time: "2023-04-28T17:00",
  //     temperature: 31,
  //   },
  //   {
  //     time: "2023-04-28T18:00",
  //     temperature: 30.1,
  //   },
  //   {
  //     time: "2023-04-28T19:00",
  //     temperature: 29.4,
  //   },
  //   {
  //     time: "2023-04-28T20:00",
  //     temperature: 28.7,
  //   },
  //   {
  //     time: "2023-04-28T21:00",
  //     temperature: 27.9,
  //   },
  //   {
  //     time: "2023-04-28T22:00",
  //     temperature: 27.3,
  //   },
  //   {
  //     time: "2023-04-28T23:00",
  //     temperature: 27,
  //   },
  //   {
  //     time: "2023-04-29T00:00",
  //     temperature: 26.5,
  //   },
  //   {
  //     time: "2023-04-29T01:00",
  //     temperature: 26.2,
  //   },
  //   {
  //     time: "2023-04-29T02:00",
  //     temperature: 25.7,
  //   },
  //   {
  //     time: "2023-04-29T03:00",
  //     temperature: 26.2,
  //   },
  //   {
  //     time: "2023-04-29T04:00",
  //     temperature: 27.9,
  //   },
  //   {
  //     time: "2023-04-29T05:00",
  //     temperature: 30.4,
  //   },
  //   {
  //     time: "2023-04-29T06:00",
  //     temperature: 32.1,
  //   },
  //   {
  //     time: "2023-04-29T07:00",
  //     temperature: 33.5,
  //   },
  //   {
  //     time: "2023-04-29T08:00",
  //     temperature: 34.2,
  //   },
  //   {
  //     time: "2023-04-29T09:00",
  //     temperature: 34.4,
  //   },
  //   {
  //     time: "2023-04-29T10:00",
  //     temperature: 34.1,
  //   },
  //   {
  //     time: "2023-04-29T11:00",
  //     temperature: 33.8,
  //   },
  //   {
  //     time: "2023-04-29T12:00",
  //     temperature: 33.6,
  //   },
  //   {
  //     time: "2023-04-29T13:00",
  //     temperature: 31.2,
  //   },
  //   {
  //     time: "2023-04-29T14:00",
  //     temperature: 27.9,
  //   },
  //   {
  //     time: "2023-04-29T15:00",
  //     temperature: 26,
  //   },
  //   {
  //     time: "2023-04-29T16:00",
  //     temperature: 25.8,
  //   },
  //   {
  //     time: "2023-04-29T17:00",
  //     temperature: 25.5,
  //   },
  //   {
  //     time: "2023-04-29T18:00",
  //     temperature: 25.1,
  //   },
  //   {
  //     time: "2023-04-29T19:00",
  //     temperature: 24.8,
  //   },
  //   {
  //     time: "2023-04-29T20:00",
  //     temperature: 24.5,
  //   },
  //   {
  //     time: "2023-04-29T21:00",
  //     temperature: 23.5,
  //   },
  //   {
  //     time: "2023-04-29T22:00",
  //     temperature: 23.1,
  //   },
  //   {
  //     time: "2023-04-29T23:00",
  //     temperature: 23.1,
  //   },
  //   {
  //     time: "2023-04-30T00:00",
  //     temperature: 23,
  //   },
  //   {
  //     time: "2023-04-30T01:00",
  //     temperature: 22.9,
  //   },
  //   {
  //     time: "2023-04-30T02:00",
  //     temperature: 22.8,
  //   },
  //   {
  //     time: "2023-04-30T03:00",
  //     temperature: 23.5,
  //   },
  //   {
  //     time: "2023-04-30T04:00",
  //     temperature: 24.9,
  //   },
  //   {
  //     time: "2023-04-30T05:00",
  //     temperature: 27,
  //   },
  //   {
  //     time: "2023-04-30T06:00",
  //     temperature: 29,
  //   },
  //   {
  //     time: "2023-04-30T07:00",
  //     temperature: 30.7,
  //   },
  //   {
  //     time: "2023-04-30T08:00",
  //     temperature: 31.8,
  //   },
  //   {
  //     time: "2023-04-30T09:00",
  //     temperature: 32.4,
  //   },
  //   {
  //     time: "2023-04-30T10:00",
  //     temperature: 32.9,
  //   },
  //   {
  //     time: "2023-04-30T11:00",
  //     temperature: 33.3,
  //   },
  //   {
  //     time: "2023-04-30T12:00",
  //     temperature: 33.2,
  //   },
  //   {
  //     time: "2023-04-30T13:00",
  //     temperature: 32.6,
  //   },
  //   {
  //     time: "2023-04-30T14:00",
  //     temperature: 31.9,
  //   },
  //   {
  //     time: "2023-04-30T15:00",
  //     temperature: 30.8,
  //   },
  //   {
  //     time: "2023-04-30T16:00",
  //     temperature: 29.4,
  //   },
  //   {
  //     time: "2023-04-30T17:00",
  //     temperature: 28.4,
  //   },
  //   {
  //     time: "2023-04-30T18:00",
  //     temperature: 27.4,
  //   },
  //   {
  //     time: "2023-04-30T19:00",
  //     temperature: 26.3,
  //   },
  //   {
  //     time: "2023-04-30T20:00",
  //     temperature: 25.7,
  //   },
  //   {
  //     time: "2023-04-30T21:00",
  //     temperature: 25.2,
  //   },
  //   {
  //     time: "2023-04-30T22:00",
  //     temperature: 24.8,
  //   },
  //   {
  //     time: "2023-04-30T23:00",
  //     temperature: 24.5,
  //   },
  //   {
  //     time: "2023-05-01T00:00",
  //     temperature: 24.2,
  //   },
  //   {
  //     time: "2023-05-01T01:00",
  //     temperature: 24.2,
  //   },
  //   {
  //     time: "2023-05-01T02:00",
  //     temperature: 24.6,
  //   },
  //   {
  //     time: "2023-05-01T03:00",
  //     temperature: 25.3,
  //   },
  //   {
  //     time: "2023-05-01T04:00",
  //     temperature: 26.5,
  //   },
  //   {
  //     time: "2023-05-01T05:00",
  //     temperature: 27.8,
  //   },
  //   {
  //     time: "2023-05-01T06:00",
  //     temperature: 29.3,
  //   },
  //   {
  //     time: "2023-05-01T07:00",
  //     temperature: 31.1,
  //   },
  //   {
  //     time: "2023-05-01T08:00",
  //     temperature: 32.1,
  //   },
  //   {
  //     time: "2023-05-01T09:00",
  //     temperature: 32.9,
  //   },
  //   {
  //     time: "2023-05-01T10:00",
  //     temperature: 33.6,
  //   },
  //   {
  //     time: "2023-05-01T11:00",
  //     temperature: 33.9,
  //   },
  //   {
  //     time: "2023-05-01T12:00",
  //     temperature: 33.9,
  //   },
  //   {
  //     time: "2023-05-01T13:00",
  //     temperature: 33.1,
  //   },
  //   {
  //     time: "2023-05-01T14:00",
  //     temperature: 31.4,
  //   },
  //   {
  //     time: "2023-05-01T15:00",
  //     temperature: 28.9,
  //   },
  //   {
  //     time: "2023-05-01T16:00",
  //     temperature: 26.3,
  //   },
  //   {
  //     time: "2023-05-01T17:00",
  //     temperature: 25.5,
  //   },
  //   {
  //     time: "2023-05-01T18:00",
  //     temperature: 25.2,
  //   },
  //   {
  //     time: "2023-05-01T19:00",
  //     temperature: 25,
  //   },
  //   {
  //     time: "2023-05-01T20:00",
  //     temperature: 24.7,
  //   },
  //   {
  //     time: "2023-05-01T21:00",
  //     temperature: 24.5,
  //   },
  //   {
  //     time: "2023-05-01T22:00",
  //     temperature: 24.2,
  //   },
  //   {
  //     time: "2023-05-01T23:00",
  //     temperature: 23.9,
  //   },
  //   {
  //     time: "2023-05-02T00:00",
  //     temperature: 23.5,
  //   },
  //   {
  //     time: "2023-05-02T01:00",
  //     temperature: 23.5,
  //   },
  //   {
  //     time: "2023-05-02T02:00",
  //     temperature: 23.8,
  //   },
  //   {
  //     time: "2023-05-02T03:00",
  //     temperature: 24.4,
  //   },
  //   {
  //     time: "2023-05-02T04:00",
  //     temperature: 25.6,
  //   },
  //   {
  //     time: "2023-05-02T05:00",
  //     temperature: 26.9,
  //   },
  //   {
  //     time: "2023-05-02T06:00",
  //     temperature: 28.6,
  //   },
  //   {
  //     time: "2023-05-02T07:00",
  //     temperature: 30.3,
  //   },
  //   {
  //     time: "2023-05-02T08:00",
  //     temperature: 30.5,
  //   },
  //   {
  //     time: "2023-05-02T09:00",
  //     temperature: 31.7,
  //   },
  //   {
  //     time: "2023-05-02T10:00",
  //     temperature: 32.7,
  //   },
  //   {
  //     time: "2023-05-02T11:00",
  //     temperature: 32.9,
  //   },
  //   {
  //     time: "2023-05-02T12:00",
  //     temperature: 32.7,
  //   },
  //   {
  //     time: "2023-05-02T13:00",
  //     temperature: 32.2,
  //   },
  //   {
  //     time: "2023-05-02T14:00",
  //     temperature: 31.5,
  //   },
  //   {
  //     time: "2023-05-02T15:00",
  //     temperature: 30.6,
  //   },
  //   {
  //     time: "2023-05-02T16:00",
  //     temperature: 29.5,
  //   },
  //   {
  //     time: "2023-05-02T17:00",
  //     temperature: 28.7,
  //   },
  //   {
  //     time: "2023-05-02T18:00",
  //     temperature: 27.9,
  //   },
  //   {
  //     time: "2023-05-02T19:00",
  //     temperature: 27,
  //   },
  //   {
  //     time: "2023-05-02T20:00",
  //     temperature: 26.4,
  //   },
  //   {
  //     time: "2023-05-02T21:00",
  //     temperature: 25.9,
  //   },
  //   {
  //     time: "2023-05-02T22:00",
  //     temperature: 25.3,
  //   },
  //   {
  //     time: "2023-05-02T23:00",
  //     temperature: 24.8,
  //   },
  //   {
  //     time: "2023-05-03T00:00",
  //     temperature: 24.5,
  //   },
  //   {
  //     time: "2023-05-03T01:00",
  //     temperature: 24.4,
  //   },
  //   {
  //     time: "2023-05-03T02:00",
  //     temperature: 24.9,
  //   },
  //   {
  //     time: "2023-05-03T03:00",
  //     temperature: 25.8,
  //   },
  //   {
  //     time: "2023-05-03T04:00",
  //     temperature: 27.3,
  //   },
  //   {
  //     time: "2023-05-03T05:00",
  //     temperature: 28.9,
  //   },
  //   {
  //     time: "2023-05-03T06:00",
  //     temperature: 30.8,
  //   },
  //   {
  //     time: "2023-05-03T07:00",
  //     temperature: 33.1,
  //   },
  //   {
  //     time: "2023-05-03T08:00",
  //     temperature: 34.3,
  //   },
  //   {
  //     time: "2023-05-03T09:00",
  //     temperature: 35.2,
  //   },
  //   {
  //     time: "2023-05-03T10:00",
  //     temperature: 36.1,
  //   },
  //   {
  //     time: "2023-05-03T11:00",
  //     temperature: 36.4,
  //   },
  //   {
  //     time: "2023-05-03T12:00",
  //     temperature: 36.4,
  //   },
  //   {
  //     time: "2023-05-03T13:00",
  //     temperature: 35.9,
  //   },
  //   {
  //     time: "2023-05-03T14:00",
  //     temperature: 34.9,
  //   },
  //   {
  //     time: "2023-05-03T15:00",
  //     temperature: 33.6,
  //   },
  //   {
  //     time: "2023-05-03T16:00",
  //     temperature: 31.9,
  //   },
  //   {
  //     time: "2023-05-03T17:00",
  //     temperature: 30.8,
  //   },
  //   {
  //     time: "2023-05-03T18:00",
  //     temperature: 29.8,
  //   },
  //   {
  //     time: "2023-05-03T19:00",
  //     temperature: 28.7,
  //   },
  //   {
  //     time: "2023-05-03T20:00",
  //     temperature: 28.1,
  //   },
  //   {
  //     time: "2023-05-03T21:00",
  //     temperature: 27.8,
  //   },
  //   {
  //     time: "2023-05-03T22:00",
  //     temperature: 27.4,
  //   },
  //   {
  //     time: "2023-05-03T23:00",
  //     temperature: 26.9,
  //   },
  //   {
  //     time: "2023-05-04T00:00",
  //     temperature: 26.4,
  //   },
  //   {
  //     time: "2023-05-04T01:00",
  //     temperature: 26.2,
  //   },
  //   {
  //     time: "2023-05-04T02:00",
  //     temperature: 26.4,
  //   },
  //   {
  //     time: "2023-05-04T03:00",
  //     temperature: 26.9,
  //   },
  //   {
  //     time: "2023-05-04T04:00",
  //     temperature: 28.1,
  //   },
  //   {
  //     time: "2023-05-04T05:00",
  //     temperature: 29.6,
  //   },
  //   {
  //     time: "2023-05-04T06:00",
  //     temperature: 31.5,
  //   },
  //   {
  //     time: "2023-05-04T07:00",
  //     temperature: 33.8,
  //   },
  //   {
  //     time: "2023-05-04T08:00",
  //     temperature: 35.2,
  //   },
  //   {
  //     time: "2023-05-04T09:00",
  //     temperature: 36.4,
  //   },
  //   {
  //     time: "2023-05-04T10:00",
  //     temperature: 37.4,
  //   },
  //   {
  //     time: "2023-05-04T11:00",
  //     temperature: 37.7,
  //   },
  //   {
  //     time: "2023-05-04T12:00",
  //     temperature: 37.5,
  //   },
  //   {
  //     time: "2023-05-04T13:00",
  //     temperature: 37.3,
  //   },
  //   {
  //     time: "2023-05-04T14:00",
  //     temperature: 34.1,
  //   },
  //   {
  //     time: "2023-05-04T15:00",
  //     temperature: 33.3,
  //   },
  //   {
  //     time: "2023-05-04T16:00",
  //     temperature: 32.1,
  //   },
  //   {
  //     time: "2023-05-04T17:00",
  //     temperature: 31.3,
  //   },
  //   {
  //     time: "2023-05-04T18:00",
  //     temperature: 30.4,
  //   },
  //   {
  //     time: "2023-05-04T19:00",
  //     temperature: 29.5,
  //   },
  //   {
  //     time: "2023-05-04T20:00",
  //     temperature: 29.2,
  //   },
  //   {
  //     time: "2023-05-04T21:00",
  //     temperature: 29.1,
  //   },
  //   {
  //     time: "2023-05-04T22:00",
  //     temperature: 28.9,
  //   },
  //   {
  //     time: "2023-05-04T23:00",
  //     temperature: 28.7,
  //   },
  //   {
  //     time: "2023-05-05T00:00",
  //     temperature: 28.6,
  //   },
  //   {
  //     time: "2023-05-05T01:00",
  //     temperature: 28.5,
  //   },
  //   {
  //     time: "2023-05-05T02:00",
  //     temperature: 28.7,
  //   },
  //   {
  //     time: "2023-05-05T03:00",
  //     temperature: 29,
  //   },
  //   {
  //     time: "2023-05-05T04:00",
  //     temperature: 29.8,
  //   },
  //   {
  //     time: "2023-05-05T05:00",
  //     temperature: 31,
  //   },
  //   {
  //     time: "2023-05-05T06:00",
  //     temperature: 32.4,
  //   },
  //   {
  //     time: "2023-05-05T07:00",
  //     temperature: 34.2,
  //   },
  //   {
  //     time: "2023-05-05T08:00",
  //     temperature: 35.4,
  //   },
  //   {
  //     time: "2023-05-05T09:00",
  //     temperature: 36.5,
  //   },
  //   {
  //     time: "2023-05-05T10:00",
  //     temperature: 37.4,
  //   },
  //   {
  //     time: "2023-05-05T11:00",
  //     temperature: 37.4,
  //   },
  //   {
  //     time: "2023-05-05T12:00",
  //     temperature: 37,
  //   },
  //   {
  //     time: "2023-05-05T13:00",
  //     temperature: 35.9,
  //   },
  //   {
  //     time: "2023-05-05T14:00",
  //     temperature: 34.5,
  //   },
  //   {
  //     time: "2023-05-05T15:00",
  //     temperature: 32.6,
  //   },
  //   {
  //     time: "2023-05-05T16:00",
  //     temperature: 30.8,
  //   },
  //   {
  //     time: "2023-05-05T17:00",
  //     temperature: 30.7,
  //   },
  //   {
  //     time: "2023-05-05T18:00",
  //     temperature: 31.1,
  //   },
  //   {
  //     time: "2023-05-05T19:00",
  //     temperature: 31.5,
  //   },
  //   {
  //     time: "2023-05-05T20:00",
  //     temperature: 31.2,
  //   },
  //   {
  //     time: "2023-05-05T21:00",
  //     temperature: 30.7,
  //   },
  //   {
  //     time: "2023-05-05T22:00",
  //     temperature: 30,
  //   },
  //   {
  //     time: "2023-05-05T23:00",
  //     temperature: 29.6,
  //   },
  //   {
  //     time: "2023-05-06T00:00",
  //     temperature: 29.3,
  //   },
  //   {
  //     time: "2023-05-06T01:00",
  //     temperature: 29.2,
  //   },
  //   {
  //     time: "2023-05-06T02:00",
  //     temperature: 29.5,
  //   },
  //   {
  //     time: "2023-05-06T03:00",
  //     temperature: 30,
  //   },
  //   {
  //     time: "2023-05-06T04:00",
  //     temperature: 31.1,
  //   },
  //   {
  //     time: "2023-05-06T05:00",
  //     temperature: 32.5,
  //   },
  //   {
  //     time: "2023-05-06T06:00",
  //     temperature: 34.3,
  //   },
  //   {
  //     time: "2023-05-06T07:00",
  //     temperature: 36.4,
  //   },
  //   {
  //     time: "2023-05-06T08:00",
  //     temperature: 38,
  //   },
  //   {
  //     time: "2023-05-06T09:00",
  //     temperature: 39.5,
  //   },
  //   {
  //     time: "2023-05-06T10:00",
  //     temperature: 39.8,
  //   },
  //   {
  //     time: "2023-05-06T11:00",
  //     temperature: 37.4,
  //   },
  //   {
  //     time: "2023-05-06T12:00",
  //     temperature: 33.6,
  //   },
  //   {
  //     time: "2023-05-06T13:00",
  //     temperature: 30,
  //   },
  //   {
  //     time: "2023-05-06T14:00",
  //     temperature: 30.3,
  //   },
  //   {
  //     time: "2023-05-06T15:00",
  //     temperature: 32,
  //   },
  //   {
  //     time: "2023-05-06T16:00",
  //     temperature: 33.9,
  //   },
  //   {
  //     time: "2023-05-06T17:00",
  //     temperature: 34.1,
  //   },
  //   {
  //     time: "2023-05-06T18:00",
  //     temperature: 33.9,
  //   },
  //   {
  //     time: "2023-05-06T19:00",
  //     temperature: 33.3,
  //   },
  //   {
  //     time: "2023-05-06T20:00",
  //     temperature: 32.6,
  //   },
  //   {
  //     time: "2023-05-06T21:00",
  //     temperature: 31.6,
  //   },
  //   {
  //     time: "2023-05-06T22:00",
  //     temperature: 30.5,
  //   },
  //   {
  //     time: "2023-05-06T23:00",
  //     temperature: 30,
  //   },
  //   {
  //     time: "2023-05-07T00:00",
  //     temperature: 29.6,
  //   },
  //   {
  //     time: "2023-05-07T01:00",
  //     temperature: 29.4,
  //   },
  //   {
  //     time: "2023-05-07T02:00",
  //     temperature: 29.6,
  //   },
  //   {
  //     time: "2023-05-07T03:00",
  //     temperature: 30.1,
  //   },
  //   {
  //     time: "2023-05-07T04:00",
  //     temperature: 31.3,
  //   },
  //   {
  //     time: "2023-05-07T05:00",
  //     temperature: 32.9,
  //   },
  //   {
  //     time: "2023-05-07T06:00",
  //     temperature: 34.9,
  //   },
  //   {
  //     time: "2023-05-07T07:00",
  //     temperature: 37.2,
  //   },
  //   {
  //     time: "2023-05-07T08:00",
  //     temperature: 38.4,
  //   },
  //   {
  //     time: "2023-05-07T09:00",
  //     temperature: 39.4,
  //   },
  //   {
  //     time: "2023-05-07T10:00",
  //     temperature: 40.1,
  //   },
  //   {
  //     time: "2023-05-07T11:00",
  //     temperature: 40.2,
  //   },
  //   {
  //     time: "2023-05-07T12:00",
  //     temperature: 40,
  //   },
  //   {
  //     time: "2023-05-07T13:00",
  //     temperature: 39.3,
  //   },
  //   {
  //     time: "2023-05-07T14:00",
  //     temperature: 38.6,
  //   },
  //   {
  //     time: "2023-05-07T15:00",
  //     temperature: 37.8,
  //   },
  //   {
  //     time: "2023-05-07T16:00",
  //     temperature: 36.6,
  //   },
  //   {
  //     time: "2023-05-07T17:00",
  //     temperature: 35.9,
  //   },
  //   {
  //     time: "2023-05-07T18:00",
  //     temperature: 35.1,
  //   },
  //   {
  //     time: "2023-05-07T19:00",
  //     temperature: 34.2,
  //   },
  //   {
  //     time: "2023-05-07T20:00",
  //     temperature: 33.6,
  //   },
  //   {
  //     time: "2023-05-07T21:00",
  //     temperature: 33,
  //   },
  //   {
  //     time: "2023-05-07T22:00",
  //     temperature: 32.2,
  //   },
  //   {
  //     time: "2023-05-07T23:00",
  //     temperature: 31.6,
  //   },
  //   {
  //     time: "2023-05-08T00:00",
  //     temperature: 30.9,
  //   },
  //   {
  //     time: "2023-05-08T01:00",
  //     temperature: 30.4,
  //   },
  //   {
  //     time: "2023-05-08T02:00",
  //     temperature: 30.6,
  //   },
  //   {
  //     time: "2023-05-08T03:00",
  //     temperature: 31.1,
  //   },
  //   {
  //     time: "2023-05-08T04:00",
  //     temperature: 32.3,
  //   },
  //   {
  //     time: "2023-05-08T05:00",
  //     temperature: 33.8,
  //   },
  //   {
  //     time: "2023-05-08T06:00",
  //     temperature: 35.6,
  //   },
  //   {
  //     time: "2023-05-08T07:00",
  //     temperature: 37.8,
  //   },
  //   {
  //     time: "2023-05-08T08:00",
  //     temperature: 39.1,
  //   },
  //   {
  //     time: "2023-05-08T09:00",
  //     temperature: 40.3,
  //   },
  //   {
  //     time: "2023-05-08T10:00",
  //     temperature: 41.2,
  //   },
  //   {
  //     time: "2023-05-08T11:00",
  //     temperature: 41.3,
  //   },
  //   {
  //     time: "2023-05-08T12:00",
  //     temperature: 41,
  //   },
  //   {
  //     time: "2023-05-08T13:00",
  //     temperature: 40.3,
  //   },
  //   {
  //     time: "2023-05-08T14:00",
  //     temperature: 39.6,
  //   },
  //   {
  //     time: "2023-05-08T15:00",
  //     temperature: 38.7,
  //   },
  //   {
  //     time: "2023-05-08T16:00",
  //     temperature: 37.5,
  //   },
  //   {
  //     time: "2023-05-08T17:00",
  //     temperature: 36.6,
  //   },
  //   {
  //     time: "2023-05-08T18:00",
  //     temperature: 35.8,
  //   },
  //   {
  //     time: "2023-05-08T19:00",
  //     temperature: 34.6,
  //   },
  //   {
  //     time: "2023-05-08T20:00",
  //     temperature: 33.8,
  //   },
  //   {
  //     time: "2023-05-08T21:00",
  //     temperature: 33.1,
  //   },
  //   {
  //     time: "2023-05-08T22:00",
  //     temperature: 32.2,
  //   },
  //   {
  //     time: "2023-05-08T23:00",
  //     temperature: 31.6,
  //   },
  //   {
  //     time: "2023-05-09T00:00",
  //     temperature: 30.9,
  //   },
  //   {
  //     time: "2023-05-09T01:00",
  //     temperature: 30.5,
  //   },
  //   {
  //     time: "2023-05-09T02:00",
  //     temperature: 30.7,
  //   },
  //   {
  //     time: "2023-05-09T03:00",
  //     temperature: 31.1,
  //   },
  //   {
  //     time: "2023-05-09T04:00",
  //     temperature: 32.3,
  //   },
  //   {
  //     time: "2023-05-09T05:00",
  //     temperature: 34,
  //   },
  //   {
  //     time: "2023-05-09T06:00",
  //     temperature: 36.1,
  //   },
  //   {
  //     time: "2023-05-09T07:00",
  //     temperature: 38.6,
  //   },
  //   {
  //     time: "2023-05-09T08:00",
  //     temperature: 39.8,
  //   },
  //   {
  //     time: "2023-05-09T09:00",
  //     temperature: 40.6,
  //   },
  //   {
  //     time: "2023-05-09T10:00",
  //     temperature: 41.3,
  //   },
  //   {
  //     time: "2023-05-09T11:00",
  //     temperature: 41.6,
  //   },
  //   {
  //     time: "2023-05-09T12:00",
  //     temperature: 41.6,
  //   },
  //   {
  //     time: "2023-05-09T13:00",
  //     temperature: 41.1,
  //   },
  //   {
  //     time: "2023-05-09T14:00",
  //     temperature: 40.4,
  //   },
  //   {
  //     time: "2023-05-09T15:00",
  //     temperature: 39.4,
  //   },
  //   {
  //     time: "2023-05-09T16:00",
  //     temperature: 37.9,
  //   },
  //   {
  //     time: "2023-05-09T17:00",
  //     temperature: 36.8,
  //   },
  //   {
  //     time: "2023-05-09T18:00",
  //     temperature: 35.6,
  //   },
  //   {
  //     time: "2023-05-09T19:00",
  //     temperature: 34.1,
  //   },
  //   {
  //     time: "2023-05-09T20:00",
  //     temperature: 33.2,
  //   },
  //   {
  //     time: "2023-05-09T21:00",
  //     temperature: 32.3,
  //   },
  //   {
  //     time: "2023-05-09T22:00",
  //     temperature: 31.3,
  //   },
  //   {
  //     time: "2023-05-09T23:00",
  //     temperature: 30.8,
  //   },
  //   {
  //     time: "2023-05-10T00:00",
  //     temperature: 30.4,
  //   },
  //   {
  //     time: "2023-05-10T01:00",
  //     temperature: 30.3,
  //   },
  //   {
  //     time: "2023-05-10T02:00",
  //     temperature: 30.5,
  //   },
  //   {
  //     time: "2023-05-10T03:00",
  //     temperature: 30.9,
  //   },
  //   {
  //     time: "2023-05-10T04:00",
  //     temperature: 32.2,
  //   },
  //   {
  //     time: "2023-05-10T05:00",
  //     temperature: 34.1,
  //   },
  //   {
  //     time: "2023-05-10T06:00",
  //     temperature: 36.6,
  //   },
  //   {
  //     time: "2023-05-10T07:00",
  //     temperature: 39.5,
  //   },
  //   {
  //     time: "2023-05-10T08:00",
  //     temperature: 41.2,
  //   },
  //   {
  //     time: "2023-05-10T09:00",
  //     temperature: 42.5,
  //   },
  //   {
  //     time: "2023-05-10T10:00",
  //     temperature: 43.7,
  //   },
  //   {
  //     time: "2023-05-10T11:00",
  //     temperature: 44,
  //   },
  //   {
  //     time: "2023-05-10T12:00",
  //     temperature: 43.9,
  //   },
  //   {
  //     time: "2023-05-10T13:00",
  //     temperature: 43.2,
  //   },
  //   {
  //     time: "2023-05-10T14:00",
  //     temperature: 42.1,
  //   },
  //   {
  //     time: "2023-05-10T15:00",
  //     temperature: 40.6,
  //   },
  //   {
  //     time: "2023-05-10T16:00",
  //     temperature: 38.7,
  //   },
  //   {
  //     time: "2023-05-10T17:00",
  //     temperature: 37.8,
  //   },
  //   {
  //     time: "2023-05-10T18:00",
  //     temperature: 37,
  //   },
  //   {
  //     time: "2023-05-10T19:00",
  //     temperature: 35.9,
  //   },
  //   {
  //     time: "2023-05-10T20:00",
  //     temperature: 34.9,
  //   },
  //   {
  //     time: "2023-05-10T21:00",
  //     temperature: 33.7,
  //   },
  //   {
  //     time: "2023-05-10T22:00",
  //     temperature: 32.4,
  //   },
  //   {
  //     time: "2023-05-10T23:00",
  //     temperature: 31.7,
  //   },
  //   {
  //     time: "2023-05-11T00:00",
  //     temperature: 31.1,
  //   },
  //   {
  //     time: "2023-05-11T01:00",
  //     temperature: 30.8,
  //   },
  //   {
  //     time: "2023-05-11T02:00",
  //     temperature: 31.2,
  //   },
  //   {
  //     time: "2023-05-11T03:00",
  //     temperature: 31.9,
  //   },
  //   {
  //     time: "2023-05-11T04:00",
  //     temperature: 33.4,
  //   },
  //   {
  //     time: "2023-05-11T05:00",
  //     temperature: 35.3,
  //   },
  //   {
  //     time: "2023-05-11T06:00",
  //     temperature: 37.6,
  //   },
  //   {
  //     time: "2023-05-11T07:00",
  //     temperature: 40.3,
  //   },
  //   {
  //     time: "2023-05-11T08:00",
  //     temperature: 41.8,
  //   },
  //   {
  //     time: "2023-05-11T09:00",
  //     temperature: 43,
  //   },
  //   {
  //     time: "2023-05-11T10:00",
  //     temperature: 44,
  //   },
  //   {
  //     time: "2023-05-11T11:00",
  //     temperature: 44.2,
  //   },
  //   {
  //     time: "2023-05-11T12:00",
  //     temperature: 43.9,
  //   },
  //   {
  //     time: "2023-05-11T13:00",
  //     temperature: 43.1,
  //   },
  //   {
  //     time: "2023-05-11T14:00",
  //     temperature: 42.1,
  //   },
  //   {
  //     time: "2023-05-11T15:00",
  //     temperature: 40.7,
  //   },
  //   {
  //     time: "2023-05-11T16:00",
  //     temperature: 39,
  //   },
  //   {
  //     time: "2023-05-11T17:00",
  //     temperature: 38,
  //   },
  //   {
  //     time: "2023-05-11T18:00",
  //     temperature: 37.1,
  //   },
  //   {
  //     time: "2023-05-11T19:00",
  //     temperature: 35.9,
  //   },
  //   {
  //     time: "2023-05-11T20:00",
  //     temperature: 35.2,
  //   },
  //   {
  //     time: "2023-05-11T21:00",
  //     temperature: 34.5,
  //   },
  //   {
  //     time: "2023-05-11T22:00",
  //     temperature: 33.6,
  //   },
  //   {
  //     time: "2023-05-11T23:00",
  //     temperature: 32.7,
  //   },
  //   {
  //     time: "2023-05-12T00:00",
  //     temperature: 31.7,
  //   },
  //   {
  //     time: "2023-05-12T01:00",
  //     temperature: 31,
  //   },
  //   {
  //     time: "2023-05-12T02:00",
  //     temperature: 31.4,
  //   },
  //   {
  //     time: "2023-05-12T03:00",
  //     temperature: 32.2,
  //   },
  //   {
  //     time: "2023-05-12T04:00",
  //     temperature: 33.9,
  //   },
  //   {
  //     time: "2023-05-12T05:00",
  //     temperature: 35.8,
  //   },
  //   {
  //     time: "2023-05-12T06:00",
  //     temperature: 38.1,
  //   },
  //   {
  //     time: "2023-05-12T07:00",
  //     temperature: 40.7,
  //   },
  //   {
  //     time: "2023-05-12T08:00",
  //     temperature: 41.8,
  //   },
  //   {
  //     time: "2023-05-12T09:00",
  //     temperature: 42.5,
  //   },
  //   {
  //     time: "2023-05-12T10:00",
  //     temperature: 43,
  //   },
  //   {
  //     time: "2023-05-12T11:00",
  //     temperature: 43.3,
  //   },
  //   {
  //     time: "2023-05-12T12:00",
  //     temperature: 43.3,
  //   },
  //   {
  //     time: "2023-05-12T13:00",
  //     temperature: 42.8,
  //   },
  //   {
  //     time: "2023-05-12T14:00",
  //     temperature: 42,
  //   },
  //   {
  //     time: "2023-05-12T15:00",
  //     temperature: 40.9,
  //   },
  //   {
  //     time: "2023-05-12T16:00",
  //     temperature: 39.2,
  //   },
  //   {
  //     time: "2023-05-12T17:00",
  //     temperature: 38,
  //   },
  //   {
  //     time: "2023-05-12T18:00",
  //     temperature: 36.7,
  //   },
  //   {
  //     time: "2023-05-12T19:00",
  //     temperature: 35.1,
  //   },
  //   {
  //     time: "2023-05-12T20:00",
  //     temperature: 34.2,
  //   },
  //   {
  //     time: "2023-05-12T21:00",
  //     temperature: 33.5,
  //   },
  //   {
  //     time: "2023-05-12T22:00",
  //     temperature: 32.5,
  //   },
  //   {
  //     time: "2023-05-12T23:00",
  //     temperature: 31.7,
  //   },
  // ],
  // setDailyWeatherData : jest.fn()
};
