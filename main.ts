enum _selectpin{
	//% block="Apin"
	Apin=0,
	//% block="Bpin"
	Bpin=1,
	//% block="Dpin"
	Dpin=2,
}

enum _rockerpins{
	//% block="Xpin"
	Xpin=0,
	//% block="Ypin"
	Ypin=1,
	//% block="Bpin"
	Bpin=2,
}


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
	





    /**
     *  Button
     */
    
    //% blockId=button block="Button |digital pin %pin" blockExternalInputs=false  group="按键开关"
    //% weight=70
    export function Button(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }






    
    /**
     *  Crash Button
     */
    
    //% blockId=crashbutton block="crashButton |digital pin %pin" blockExternalInputs=false  group="碰撞开关"
    //% weight=70
    export function crashButton(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }
	    





    
    /**
     *  Slide rheostat
     */
    
    //% blockId=slideRheostat block="slideRheostat |analog pin %pin" blockExternalInputs=false  group="滑动变阻器"
    //% weight=70
    export function slideRheostat(pin: AnalogPin): number {
        let row = pins.analogReadPin(pin)
        let R = (1 - row / 1023) * 1000
        return   R
    }
	          





    
    /**
     *  Rotary encoder
     */

    let _Apin = 0
    let _Dpin = 0
    let _Bpin = 0
    
    //% blockId=rotaryEncoder block="rotaryEncoder setup | pinA %pina|pinB %pinb|pinD %pind" blockExternalInputs=false  group="旋转编码器"
    //% weight=70
    export function rotaryEncoder(pina: DigitalPin, pinb: DigitalPin, pind: DigitalPin): void {
        _Apin = pina
        _Bpin = pinb
        _Dpin = pind  
    }

    //% blockId=pinsRead block="select pin  %selectpin" blockExternalInputs=false  group="旋转编码器"
    //% weight=70
    export function pinsRead(selectpin: _selectpin): number {
        let a;
        if (selectpin == 0)
            a = _Apin
        else if (selectpin == 1)
            a = _Bpin
        else if (selectpin == 2)
            a = _Dpin
        
        return pins.digitalReadPin(a)
	}
	                





    
    /**
     *  Rocker
     */

    let Xpin = 0
    let Ypin = 0
    let Bpin = 0
    
    //% blockId=rockerPin block="rockerPin set | pinX %pinx|pinY %piny|pinB %pinb" blockExternalInputs=false  group="摇杆模块"
    //% weight=70
    export function rockerPin(pinx: AnalogPin, piny: AnalogPin, pinb: DigitalPin): void {
        Xpin = pinx
        Ypin = piny
        Bpin = pinb
    }

    //% blockId=_pinsRead block="select pin  %rockerpins" blockExternalInputs=false  group="摇杆模块"
    //% weight=70
    export function _pinsRead(rockerpins: _rockerpins): number {
        let a;
        if (rockerpins == 0 || rockerpins == 1){
            if (rockerpins == 0)
                a = Xpin   
            else if (rockerpins == 1)
                a = Ypin
            return pins.analogReadPin(a)
        }
        else if (rockerpins == 2)
            return pins.digitalReadPin(Bpin)
    }
	
	

}