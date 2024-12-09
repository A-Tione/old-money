export interface DateType {
  getUTCFullYear: () => number,
  getMonth: () => number,
  getDate: () => number,
  getHours: () => number,
  getMinutes: () => number,
  getSeconds: () => number,
  getMilliseconds: () => number,
}

export const time = (date: DateType = new Date()) => {
  const api = {
    format: (pattern = 'YYYY-MM-DD') => {
      // 支持的格式 YYYY MM DD HH mm ss SSS
      const year = date.getUTCFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()
      const msecond = date.getMilliseconds()
      return pattern.replace(/YYYY/g, year.toString())
        .replace(/MM/g, month.toString().padStart(2, '0'))
        .replace(/DD/g, day.toString().padStart(2, '0'))
        .replace(/HH/g, hour.toString().padStart(2, '0'))
        .replace(/mm/g, minute.toString().padStart(2, '0'))
        .replace(/ss/g, second.toString().padStart(2, '0'))
        .replace(/SSS/g, msecond.toString().padStart(2, '0'))
    }
  }

  return api
}