import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Converts any given date string or object to IST format.
 * @param {string|Date} date - The input date (e.g., "April 10, 2025")
 * @param {string} format - Desired output format (default: "DD MMM YYYY, hh:mm A")
 * @returns {string} - Date formatted in IST
 */
export const formatToIST = (date:Date | string, format = "DD MMM, YYYY") => {
    return dayjs(date).tz("Asia/Kolkata").format(format);
};
