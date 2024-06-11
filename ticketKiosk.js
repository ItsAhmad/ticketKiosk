/* If the age is 12 or lower, return “Here is your free ticket”
If the age is anything between 13 and 17, return “Here is your discounted teen ticket”
If the age is anything between 18 and 64, return “Here is your adult ticket”
If the age is 65 or above, return “Here is your discounted senior ticket”
*/



function ticketKiosk(customerAge) {
    return customerAge <= 12 ? "Here is your free ticket" :
           customerAge >= 13 && customerAge <= 17 ? "Here is your discounted teen ticket" :
           customerAge >= 18 && customerAge <= 64 ? "Here is your adult ticket" :
           "Here is your discounted senior ticket";
}
