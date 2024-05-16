const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);
console.log(cmas);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
const one_day = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / one_day)} days left until Christmas!`); 