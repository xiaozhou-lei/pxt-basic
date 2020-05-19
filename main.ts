//% color="#FF7F50" weight=10 icon="\uf785" block="_basic"
namespace _basic{
	
	
    /**
     * Touch button
     */
    
    //% blockId=touchbutton block="touch |digital pin %pin" blockExternalInputs=false  group="触摸按键"
    //% weight=70
    export function touchButton(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }
}