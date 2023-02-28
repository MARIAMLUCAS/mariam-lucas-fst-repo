const bookAppointment = async (id,name,date,hour,note,docName,docNum,gender,phone) => {

    try {
        
        const url = 'http://clinichost-001-site1.ctempurl.com/API.asmx/bookAppoiment'
        const body = {
            "patient_id":id,
            "name":name,
            "appDate":date,
            "hour":hour,
            "note":note,
            "doctor_name":docName,
            "doctor_number":docNum,
            "gender":gender,
            "phone" : phone
        }
        const option = {
            'method':'POST',
            body: JSON.stringify(body),
            headers:{
                "Content-Type": "application/json"
            }
        }
        const res = await fetch(url, option)
        
        const data = await res.json()
        
                  
        
        if (!res.ok) {
            const message = data.Message;
            throw new Error(message);
        }
        alert(data.d)
        
    } catch (error) {
        alert(error)
    }
}

export {bookAppointment}