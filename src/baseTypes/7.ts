enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend(day: DaysOfWeek): boolean {
    return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

// Приклади використання:
console.log(isWeekend(DaysOfWeek.Monday)); // false
console.log(isWeekend(DaysOfWeek.Saturday)); // true
console.log(isWeekend(DaysOfWeek.Sunday)); // true

export {};
