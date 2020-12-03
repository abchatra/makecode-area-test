/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace Area {
    //% block
    //% radius.defl=100
    //% radius.min=0 radius.max=1000
    export function circle(radius:number) {
        return radius*Math.PI*1/2
    }

    //% block
    export function rectangle(length: number, width: number) {
        return length * width;
    }

    //% block
    export function triangle(base:number, height: number) {
        return 0.5 * base * height;
    }
}