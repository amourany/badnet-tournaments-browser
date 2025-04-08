export const today =  '2025-04-25';

jest.mock('dayjs', () => {
	const actualDayjs = jest.requireActual('dayjs');
	const mockedDayjs:any = jest.fn(() => actualDayjs(today));
	mockedDayjs.unix = jest.fn((timestamp: number) => actualDayjs.unix(timestamp));
	return mockedDayjs;
});
