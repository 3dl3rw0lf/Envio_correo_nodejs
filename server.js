import brevo from "@getbrevo/brevo";
import { API_KEY_ENV } from "./config.js";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, API_KEY_ENV);

async function main() {
	try {
		//TODO: Obtener datos para envio desde DB
		const sendSmtpEmail = new brevo.SendSmtpEmail();

		sendSmtpEmail.subject = "Hello world from Brevo and NodeJS";
		sendSmtpEmail.cc = [{ email: "mxjulian@gmail.com", name: "Julián Mariño" }];
		sendSmtpEmail.to = [
			{ email: "arauz.gustavo@yahoo.com.ar", name: "Gustavo Arauz" },
		];
		sendSmtpEmail.htmlContent =
			"<html><body><h1>Common: This is my first transactional email from Brevo & NodeJS</h1></body></html>";
		sendSmtpEmail.sender = { name: "3dl3rw0lf", email: "arauz.gus@gmail.com" };
		/** TODO: agregar adjunto
		 * attachment
		 * array of objects 
		 * Pass the absolute URL (no local file) or the base64 content of the attachment along with the attachment name. 
		 * Mandatory if attachment content is passed. For example,
		 * [{"url":"https://attachment.domain.com/myAttachmentFromUrl.jpg", "name":"myAttachmentFromUrl.jpg"}, {"content":"base64 example content", "name":"myAttachmentFromBase64.jpg"}].
		 * Allowed extensions for attachment file:
		 * xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, 
		 * gif, jpg, jpeg, png, tif, tiff, rtf, bmp, 
		 * cgm, css, shtml, html, htm, 
		 * zip, xml, ppt, pptx, tar, ez, ics, 
		 * mobi, msg, pub, eps, odt, mp3, m4a, m4v, wma, ogg, flac, wav, aif, aifc, aiff, mp4, mov, avi, mkv, mpeg, mpg, wmv, 
		 * pkpass and xlsm.
	     */ 
		// sendSmtpEmail.attachment

		const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

main();
