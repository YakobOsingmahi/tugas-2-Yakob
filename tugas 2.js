// Nomor 1
let jabatan = 'CEO';
if (jabatan == 'CEO') {
  console.log('jika saya sebagai CEO, maka tugas saya adalah memimpin perusahaan');
} else if (jabatan === 'CTO') {
  console.log('jika saya sebagai CTO, maka tugas saya adalah memastikan teknologi yang digunakan mampu menunjang kebutuhan perusahaan');
} else if (jabatan === 'HR') {
  console.log('jika saya sebagai HR, maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baaru');
} else if (jabatan === 'Programer') {
  console.log('jika saya sebagai Programer, maka tugas saya adalah membuat sebuah program');
}

// Nomor 2
let nilaiA = 10;
let nilaiB = 20;

if (nilaiA > nilaiB) {
  console.log('nilai A lebih besar daripada B');
} else if (nilaiA < nilaiB) {
  console.log('nilai A lebih kecil daripada nilai B');
} else if ((nilaiA = nilaiB)) {
  console.log('nilai A sama dengan nilai B');
}

//Nomor 3
Minggu = 1;
Senin = 2;
Selasa = 3;
Rabu = 4;
Kamis = 5;
Jumad = 6;
Sabtu = 7;

let hari = 1;
switch (hari) {
  case 1: {
    console.log('ini hari Minggu');
    break;
  }
  case 2: {
    console.log('ini hari Senin');
    break;
  }
  case 3: {
    console.log('ini hari Selasa');
    break;
  }
  case 4: {
    console.log('ini hari Rabu');
    break;
  }
  case 5: {
    console.log('ini hari Kamis');
    break;
  }
  case 6: {
    console.log('ini hari Jumad');
    break;
  }
  case 7: {
    console.log('ini hari Sabtu');
    break;
  }
}

//Nomor 4

let arah = 'UP';

switch (arah) {
  case 'UP': {
    console.log('karakter berjalan ke atas');
    break;
  }
  case 'RIGHT': {
    console.log('karakter berjalan ke kanan');
    break;
  }
  case 'BOTTOM': {
    console.log('karakter berjalan ke bawa');
    break;
  }
  case 'LEFT': {
    console.log('karakter berjalan ke kiri');
    break;
  }
}
