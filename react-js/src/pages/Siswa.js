import Listsiswa from "./Listsiswa";

function Siswa() {
    const nama = ['Budi','Joni','Siti']

    return (
      <div className="App">
          <Listsiswa judul = {nama}/>
      </div>
    );
  }
  
  export default Siswa;
  