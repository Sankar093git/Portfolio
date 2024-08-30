function sendMessage(){
    var params={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        ph_no:document.getElementById("phone").value,
        message:document.getElementById("message").value
    }

    emailjs.send("service_qng3vof","template_hu1e1zk",params).then(function(res){
        alert("Success!"+res.status);
    })

}