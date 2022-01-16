const cargo = new Map()

cargo.set('Carlos','Operário');
cargo.set('Pedro','Admin');
cargo.set('João','Operário');
cargo.set('Victor','Admin');
cargo.set('Carol','Admin');
cargo.set('Vinicius','Admin');
cargo.set('José','Operário');

let admin = [];

function getAdmins(Map) {
    for([key,value] of Map){
        if(value === 'Admin'){
              admin.push(key);
        }
    }  console.log(admin);
}

getAdmins(cargo)
