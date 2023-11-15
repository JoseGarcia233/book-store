
import axios from 'axios';


const Bookdtail = (id) => {

    const responses = axios.get(`https://localhost:44394/Api/Books/${id}`)
      .then(function (res) {
        console.log(res);
        console.log(responses)
      })
  return (
    <div>Bookdtail</div>
  )
}



export default Bookdtail