const cpu = {};
cpu.cores = 16;
cpu.threads = 32;
cpu.socket = 'Socket 1700';
cpu.supportedMemoryTypes = ['DDR5', 'DDR4'];
cpu.frequency = {
    baseFrequency : '1000',
    maximumFrequency : '2000'
};

console.log('**********************************************');
console.log(Object.keys(cpu));
console.log('**********************************************');
console.log(Object.keys(cpu.frequency));
console.log('**********************************************');
console.log(Object.values(cpu));
console.log('**********************************************');
console.log(Object.values(cpu.frequency));
