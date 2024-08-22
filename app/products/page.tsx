import React from 'react'

export default function page() {
    //Di goi API lay data de di render ra man hinh trinh duyet
    //Fetch
    //axios
    const [products,setProducts]=useState<any>();
    useEffect(() => {
        axios.get("http://localhost:3001/api/products")
        .then((response)=>{
            console.log(response);

        })
    })
  return (
    <div>Danh sach san pham</div>
  )
}
