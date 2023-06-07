let contact = document.querySelector('section#contact .row:last-child')
let contactContent=[
    {
        name:'First name',
        Placeholdname: 'Enter your name',
        lastNAME:'Last name',
        Placeholdsurname:'Enter your surname',
        Emails:'E-mail Address',
        email:'name@example.com',
        message:'Message us here',
        home:'9973 Phengwini Street, Mfuleni,Cape Town ,7100',
        tell:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>',
        mail:'info@beauty.com',
        traiding:'weekdays only'

    }


]

contactContent.forEach((content)=>{
    contact.innerHTML += `
    <div class="container text-center">
    <h1>CONNECT WITH US HERE</h1><br><br>
    <div class="row align-items-start">
      <div class="col">
        <h3>If you have any questions, please contact us here</h3>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">${content.name}</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="${content.Placeholdname}">
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">${content.lastNAME}</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="${content.Placeholdsurname}">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">${content.message}</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </div>
      <div class="col">
       <h3>Contact information</h3><br>
       <P>${content.home}</P>
       <P>${content.tell}</P>
       <P>${content.mail}</P>
       <P>${content.traiding}</P>
      </div>
    
    </div>
  </div>
  `
})
