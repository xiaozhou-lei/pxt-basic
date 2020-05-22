enum _selectpin{
	//% block="Apin"
	Apin=0,
	//% block="Bpin"
	Bpin=1,
	//% block="Dpin"
	Dpin=2,
}

enum _rockerpin{
	//% block="Xpin"
	Xpin=0,
	//% block="Ypin"
    Ypin = 1,
    //% block="Bpin"
    Bpin = 2,
}



//% color="#228B22" weight=10 icon="\uf015" block="basicmodule"
namespace basicmodule{
	
	
    /**
     * 触摸按键
     */
    
    //% blockId=touchbutton block="touch |digital pin %pin" blockExternalInputs=false  group="触摸按键"
    //% weight=70
    export function touchButton(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }
	





    /**
     *  按键开关
     */
    
    //% blockId=button block="Button |digital pin %pin" blockExternalInputs=false  group="按键开关"
    //% weight=70
    export function Button(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }






    
    /**
     *  碰撞开关
     */
    
    //% blockId=crashbutton block="crashButton |digital pin %pin" blockExternalInputs=false  group="碰撞开关"
    //% weight=70
    export function crashButton(pin: DigitalPin): number {
        return pins.digitalReadPin(pin)
    }
	    





    
    /**
     *  滑动变阻器
     */
    
    //% blockId=slideRheostat block="slideRheostat |analog pin %pin" blockExternalInputs=false  group="滑动变阻器"
    //% weight=70
    export function slideRheostat(pin: AnalogPin): number {
        let row = pins.analogReadPin(pin)
        let R = (1 - row / 1023) * 1000
        return   R
    }
    	    





    
    /**
     *  旋转电位器
     */
    
    //% blockId=rotaryPotentiometer block="rotaryPotentiometer |analog pin %pin" blockExternalInputs=false  group="旋转电位器"
    //% weight=70
    export function rotaryPotentiometer(pin: AnalogPin): number {
        let row = pins.analogReadPin(pin)
        let V = (row / 1023) * 5
        return   V
    }
	          





    
    /**
     *  旋转编码器
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
        let a
        if (selectpin == 0)
            a = _Apin
        else if (selectpin == 1)
            a = _Bpin
        else if (selectpin == 2)
            a = _Dpin
        
        return pins.digitalReadPin(a)
	}
	   	          





    
    /**
     *  摇杆模块
     */

    let Xpin = 0
    let Ypin = 0
    let Bpin = 0
    
    //% blockId=rockerPin block="rockerPin setup | pinX %pinx|pinY %piny|pinB %pinb" blockExternalInputs=false  group="摇杆模块"
    //% weight=70
    export function rockerPin(pinx: AnalogPin, piny: AnalogPin, pinb: DigitalPin): void {
        Xpin = pinx
        Ypin = piny
        Bpin = pinb  
    }

    //% blockId=_analogRead block="select analog pin  %selectpin" blockExternalInputs=false  group="摇杆模块"
    //% weight=70
    export function _analogRead(selectpin: _rockerpin): number {
        let a
        if (selectpin == 0)
            a = Xpin
        else if (selectpin == 1)
            a = Ypin
        
        return pins.analogReadPin(a)
    }
    
    //% blockId=_digitalRead block="from |%selectpin read" blockExternalInputs=false  group="摇杆模块"
    //% weight=70
    export function _digitalRead(selectpin: _rockerpin): number {
        let a
        if (selectpin == 2)
            a = Bpin
        
        return pins.analogReadPin(a)
    }
	
	
	
	
	
	
	
	
	
	
	
	/**
	 *  钢琴模块
	 */
	
	let _DIO = 0
    let _CLK = 0
    
    //% blockId=basic_piano_pin block="basic_piano_pin |DIO pin %DIO|CLK pin %CLK" blockExternalInputs=false  group="钢琴模块"
    //% weight=70
    export function basic_piano_pin(DIO: DigitalPin, CLK: DigitalPin): void {
        
        _DIO = DIO
        _CLK = CLK
    }

    //% blockId=basic_piano_play block="basic_piano_play" blockExternalInputs=false  group="钢琴模块"
    //% weight=70
    export function basic_piano_play(): void {

        if (0 == pins.digitalReadPin(_DIO)) {
            let list: number[] = []
            for (let index = 0; index <= 15; index++) {
                for (let index2 = 0; index2 < 4; index2++) {
                    pins.digitalWritePin(_CLK, 0)
                }
                for (let index2 = 0; index2 < 4; index2++) {
                    pins.digitalWritePin(_CLK, 1)
                }
                list[index] = pins.digitalReadPin(_DIO)
            }
            if (!(list[0])) {
                music.playTone(262, music.beat(BeatFraction.Half))
            } else if (!(list[1])) {
                music.playTone(294, music.beat(BeatFraction.Half))
            } else if (!(list[2])) {
                music.playTone(330, music.beat(BeatFraction.Half))
            } else if (!(list[3])) {
                music.playTone(349, music.beat(BeatFraction.Half))
            } else if (!(list[4])) {
                music.playTone(392, music.beat(BeatFraction.Half))
            } else if (!(list[5])) {
                music.playTone(440, music.beat(BeatFraction.Half))
            } else if (!(list[6])) {
                music.playTone(494, music.beat(BeatFraction.Half))
            } else if (!(list[7])) {
                music.playTone(523, music.beat(BeatFraction.Half))
            }
        }
    }


}