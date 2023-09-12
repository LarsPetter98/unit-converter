/* Imports */
import {fromUnits, toUnits} from "./modules/calculation-data.mjs";
import {html} from "./modules/html.mjs";


/* Module */
const root = document.querySelector(".root")


/* View */
function renderpage () {

    //Set html
    root.innerHTML = html;

    //Wait for dom to load before setting changes at dom objects
    document.addEventListener("DOMContentLoaded", () => {

      //Define variables  
      const inputFrom = document.querySelector(".input-from");
      const inputTo = document.querySelector(".input-to")
      const from = document.querySelector(".from");
      const to = document.querySelector(".to");
      const result = document.querySelector(".result");
      const btns = document.querySelectorAll(".btn");
      const optionFrom = document.querySelectorAll(".option-from");
      const optionTo = document.querySelectorAll(".option-to");

      //Style changes
      from.style.overflow = "hidden";
      to.style.overflow = "hidden";


      //Setting correct units at selected category (length, temperature, weight, etc)
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {

            //Setting textContent and calculation data for selected category at "fromUnits"
            //==============================================================================
            let fromUnitsArray = Object.keys(fromUnits); //Keys from "fromUnits" into array
            fromUnitsArray.forEach((fromUnit) => { //Iterating over array 
                if(fromUnit == btn.textContent) { //If key matches btn
                    let unit = fromUnits[fromUnit]; //then we select the key 
                    let unitArray = Object.keys(unit); //and turn its keys into an array
                    let i = 0;
                    optionFrom.forEach((option) => { //Iterate over option-elements (units you can choose meter, km etc)
                        option.textContent = unitArray[i]; //Option's textcontent = corresponding key in unitArray
                        i++;
                        unitArray.forEach((item) => { //Iterate over unitArray
                            if(option.textContent == item) { //If option matches corresponding key
                                option.value = unit[item]; //Then option is given the key's calculation data
                            }
                        })
                    })
                    unitArray.length <= 11?from.style.overflow = "hidden":from.style.overflow = ""
                }
            });
            
            //Setting textContent and calculation data for selected category at "toUnits".
            //==============================================================================
            //Same logic as at "fromUnits"
            let toUnitsArray = Object.keys(toUnits);
            toUnitsArray.forEach((toUnit) => {
                if(toUnit == btn.textContent) {
                    let unit = toUnits[toUnit];
                    let unitArray = Object.keys(unit);
                    let i = 0;
                    optionTo.forEach((option) => {
                        option.textContent = unitArray[i];
                        i++;
                        unitArray.forEach((item) => {
                            if(option.textContent == item) {
                                option.value = unit[item];
                            }
                        })
                    })
                    unitArray.length <= 11?to.style.overflow = "hidden":to.style.overflow = ""
                }
            });
        });
      });
    
      // Convert unit
      inputFrom.addEventListener("keypress", (event) => {
        if(event.key === "Enter" && !isNaN(inputFrom.value)) {
            let fromUnitCalcData = from.value;// The calc data from the unit we're converting from
            let toUnitCalcData = to.value;// The calc data from the unit we're converting to
            let value = inputFrom.value;// The given user value
    
            // Convert given value to rootUnit
            let inRootUnit = eval(value + fromUnitCalcData);
            
            //Convert from rootUnit to chosen unit
            let rootUnitToChoosenUnit = eval(inRootUnit + toUnitCalcData);
    
            //Showing result on website
            let fromUnit = from.selectedOptions[0].innerText;// The unit we're converting from
            let toUnit = to.selectedOptions[0].innerText;// The unit we're converting to
            result.textContent = `Result: ${value} ${fromUnit} = ${rootUnitToChoosenUnit} ${toUnit}`; //Printing result
            inputTo.value = rootUnitToChoosenUnit + " " + toUnit; //Printing result    
        }
      })
});
};


/* Controller */
renderpage();
