import ReactDOM from 'react-dom/client';
/**
 * 
 * di react mungkin kita akan sedikit kebingungan dalam memahami cara kerja dari react js
 * karena ada beberapa aturan yang sudah menjadi standart di dalama javascript mengemalami
 * perubahan di dalam react
 * 
 * JIKA kita mengimport file yang berbentuk javascript atau library part ketiga kita tidak perlu 
 * tambahkan ektensionnya di belakang nya
 * 
 * tapi jika file selain kedua file diatas. kita bisa tambahkan ekstension di dalamnya seperti
 * file css, CONTOH === index.css
 * 
 * 
 */
import './index.css';
import App from './App';


/**
 * 
 * React terdiri dari 2 bagian
 * yaitu react dom dan juga react 
 * 2 file ini adalah 2 bagian yang membangung library dari react js. tetapi kedua file tersebut
 * memiliki fungsi yang berbeda
 * 
 * react adalah cara membuat website dengan struktur single page saja
 * artinya file html pada web yang menggunakan react hanya ada 1 satu saja
 * dimana file html itulah yang bertugas untuk membuat dan menampilkan tampilan web kita.
 * 
 * tampilan web kita dibuat di dalam file js. ya benar kita membuat tampilan kita di file js
 * ini mungkin sedikit aneh tapi memang benar kita bisa membuat tampilan web kita di dalam file js
 * ini berguna sehingga kita bisa menggunakan secara berulang. inilah yang disebut component
 * 
 * file html kita berisikan div class root. disini lah web ditampilkan
 * dan kita perlu mengaitkan dengan react dom lalu. kita berikan tampilan html kita dengan component
 * yang kita buat di dalam app.js
 * 
 * file css yang kita import akan secara otomotis bisa mempengaruhi app.js
 * 
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
