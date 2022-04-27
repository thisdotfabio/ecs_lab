import { Request, Response } from "express";
import * as os from "os";

type Times = "user" | "nice" | "sys" | "idle" | "irq";

export const heathcheck = (req: Request, res: Response) => {
    res.type("json");

    const cpuUsage: {[_: string]: number} = {} 
    os.cpus().forEach((cpu) => {
        const totalCpu = Object.keys(cpu.times).reduce((prev: number, next: string) => {
            return prev + cpu.times[next as Times];
        }, 0);

        const coreUsage = Math.round(10000 - (10000 * cpu.times.idle / totalCpu)) / 100;
        cpuUsage[`cpu${Object.keys(cpuUsage).length + 1}`] = coreUsage;
    });
    
    const memUsage = Math.round(10000 * os.freemem() / os.totalmem()) / 100;

    res.send({
        cpu: cpuUsage,
        mem: memUsage
    });
};