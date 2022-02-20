import './App.css';
import React from 'react'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

function App() {

  const downloadPDF = () =>{
    let img = new Image();
    img.crossOrigin = 'anonymous';
    html2canvas(document.querySelector("#invoice")).then(canvas => {
      // document.body.appendChild(canvas)
      try{
        img.src = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p','mm', 'a4')
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(img, 'PNG',5,0,width-10,height);
        pdf.save('invoice.pdf');
      }catch(e){
        console.log(e)
      }
   });
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="invoice" id="invoice">
          <div className='row info'>
            <div className='col-md-6'>
              {/* <div className='row'>
                  <img className='company-logo' src={require('../src/static/img/logo_size.jpg')}/>
              </div> */}
              <ul>
                <li><img className='company-logo' src={require('../src/static/img/logo_size.jpg')}/></li>
                <li>Company Name</li>
                <li>service@company.com</li>
                <a>www.websitelink/demo</a>
              </ul>
              
            </div>
            <div className='col-md-6'>
              <ul>
                <li>Invoice#: 00001 </li>
                <li>Name: XXX</li>
                <li>Address: </li>
                <li>Phone: </li>
                <li>Invoice Date: </li>
                <li>Due Date: </li>
              </ul>
            </div>  
          </div>
          <div className='row'>
            <table>
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Item 1</th>
                  <th>Item1 Description</th>
                  <th>20</th>
                  <th>1000</th>
                </tr>
                <tr>
                  <th>Item 2</th>
                  <th>Item2 Description</th>
                  <th>20</th>
                  <th>1000</th>
                </tr>
                <tr>
                  <th>Item 3</th>
                  <th>Item3 Description</th>
                  <th>20</th>
                  <th>1000</th>
                </tr>
                <tr>
                  <th>Item 4</th>
                  <th>Item4 Description</th>
                  <th>20</th>
                  <th>1000</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='row justify-content-end'>
            <div className='col-md-12'>
              <ul className='total'>
                <li>Subtotal:1000</li>
                <li>Coupon:-10</li>
                <li>Total:900</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-secondary" onClick={downloadPDF}>Download</button>
        </div>
      </header>
    </div>
  );
}

export default App;
