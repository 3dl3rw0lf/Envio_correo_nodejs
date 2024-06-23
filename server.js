import brevo from "@getbrevo/brevo";
import { API_KEY_ENV } from './config.js';

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  API_KEY_ENV
);


async function main(){
try {
    //TODO: Obtener datos para envio desde DB
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    
    sendSmtpEmail.subject = "Hello world from Brevo and NodeJS";
    sendSmtpEmail.cc = [
      { email: "mxjulian@gmail.com", name: "Julián Mariño" },
    ];
     sendSmtpEmail.to = [
      { email: "arauz.gustavo@yahoo.com.ar", name: "Gustavo Arauz" },
    ];
    sendSmtpEmail.htmlContent =
      "<html><body><h1>Common: This is my first transactional email from Brevo & NodeJS</h1></body></html>";
    sendSmtpEmail.sender =  {name: "3dl3rw0lf", email: "arauz.gus@gmail.com"};
    // TODO: agregar adjunto
    // sendSmtpEmail.attachment
    
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    console.log(result);
} catch (error) {
    console.error(error);
}
}

main();