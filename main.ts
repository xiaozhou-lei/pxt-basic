//% color="#FF7F50" weight=10 icon="\uf032" block="basicmodule"
namespace basicmodule{
	
	
    /**
     * Touch button
     */
    
    //% blockId=touchbutton block="touch |digital pin %pin" blockExternalInputs=false  group="触摸按键"
    //% weight=70
    export function touchButton(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }
}