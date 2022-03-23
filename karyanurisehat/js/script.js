"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Infocorona":{
		"Title": "Okay sudah dulu ya",
		"Subtitle": "Untuk tambahan info lain bisa dicek dibawah ini",
		"Message": `
			<p>Berita di Pekalongan :<a href='https://www.google.com/search?q=corona+pekalongan&source=lnms&tbm=nws'  target='_blank'> Klik Disini</a></p>
			<p>Info COVID-19 Kab Pekalongan :<a href='http://corona.pekalongankab.go.id/'  target='_blank'> Klik Disini</a></p>
			<p>Info COVID-19 Kota Pekalongan :<a href='https://corona.pekalongankota.go.id/'  target='_blank'> Klik Disini</a></p>
			<p>Info COVID-19 Jateng : <a href='https://corona.jatengprov.go.id/' target='_blank'>Klik DIsini</a></p>
			<p>Info COVID-19 Dunia :<a href='https://www.worldometers.info/coronavirus/'  target='_blank'> Klik Disini</a></p>
			<p>*Nyari info tentang COVID-19 itu baik, tapi jangan jadi stres ya nanti bikin imun turun</p>`
	}
};

const scenes = {
	"Rs": "rs.jpeg",
};

const characters = {
	"e":{
		"Name": "Sari",
		"Color": "#00bfff",
		"Directory": "Sari",
		"Images":{
			"Normal": "normal.png",
			"Happy": "happy.png",
			"Angry": "angry.png",
			"Curious": "curious.png",
			"Surprised": "surprised.png",
			"Worried": "worried.png"
		}
	}
};

let script = {
	// The game starts here.
	"English":{
		"Start": [
			"scene Rs",
			"show e Normal with fadeIn",
			"Halo mbak-mbak dan mas-mas sekeluarga",
			"Perkenalkan nama saya Sari",
			"show e Happy with fadeIn",
			"e Ngomong-ngomong sudah mulai musim panas ya",
			"e Masih musim COVID-19 juga",
			"show e Curious with fadeIn",
			{"Choice":{
				"Text":	"COVID-19 itu bisa musnah pada musim panas ngga sih?",
				"Iyapanas":{
					"Text": "Iya  ",
					"Do": "jump Iyapanas"
				},
				"Tidakpanas":{
					"Text": "Tidak",
					"Do": "jump Tidakpanas"
				},
			}}
		],

		"Iyapanas": [
			"show e Surprised with fadeIn",
			"e Loh kog iya sih",
			"e Kata Pak Luhut ya?",
			"show e Normal with fadeIn",
			"e Mungkin Pak Luhut berpatokan pada penelitian Araujo dan Naimi ya",
			"e Padahal kan penelitiannya belum melewati proses peer-review",
			"e Jadi.. belum ada kesimpulan definitif yang dapat ditarik terkait klaim bahwa Virus Corona baru SARS-CoV-2",
			"e Yang menyebabkan COVID-19 akan mereda pada musim tertentu",
			"jump Udara",
		],

		"Tidakpanas": [
			"show e Worried with fadeIn",
			"e Iyap",
			"e Belum ada bukti bahwa COVID-19 punya perilaku musiman",
			"e Jadi walopun panas-panas tetap hati hati",
			"jump Udara",
		],

		"Udara": [
			"show e Normal with fadeIn",
			"e Tetap pake masker kalau mau keluar rumah ya",
			"e Menurut The Guardian, negara yang mewajibkan penggunakan masker sejak awal menunjukan tingkat kematian yang lebih rendah lho",
			{"Choice":{
				"Text":	"Menurut anda apakah COVID-19 menyebar melalui udara?",
				"Iyaudara":{
					"Text": "Iya  ",
					"Do": "jump Iyaudara"
				},
				"Tidakudara":{
					"Text": "Tidak",
					"Do": "jump Tidakudara"
				},
			}}
		],

		"Iyaudara": [
			"show e Worried with fadeIn",
			"e Emm emang sih.. tapi..",
			"e Penularan SARS-CoV-2 melalui udara hanya terjadi dalam kondisi tertentu",
			"e di laboratorium atau fasilitas pelayanan kesehatan khusus",
			"e Misalnya ruang isolasi, unit perawatan intensif/kritis, dan lain lain",
			"e Ketika petugas kesehatan melakukan prosedur yang menghasilkan aerosol pada pasien COVID-19",
			"jump Rokok",
		],

		"Tidakudara": [
			"show e Normal with fadeIn",
			"e Yep dalam situasi normal coronavirus baru ini tidak menyebar melalui udara",
			"e Virus ini menyebar melalui percikan dan kontak jarak dekat",
			"e Jika seseorang menyentuh mulut, hidung dan mata mereka dengan tangan yang terkontaminasi maka mereka dapat terinfeksi virus ini",
			"jump Rokok",
		],

		"Rokok": [
			"e Walopun hanya udara yang dalam keadaan tertentu yang dapat menyebarkan COVID-19 tapi kadang ada udara yang bahaya juga ya",
			"show e Angry with fadeIn",
			"e Seperti udara yang tercemar asap kendaraan, pabrik ataupun rokok misalnya",
			{"Choice":{
				"Text":	"e Ada juga yang menyebarkan berita kalo merokok dapat menangkal COVID-19, anda percaya tidak?",
				"Iyaudara":{
					"Text": "Percaya",
					"Do": "jump Iyarokok"
				},
				"Tidakudara":{
					"Text": "Tidak",
					"Do": "jump Tidakrokok"
				},
			}}
		],

		"Iyarokok": [
			"show e Surprised with fadeIn",
			"e Hah? Percaya?",
			"e Masa iya sesuatu yang buruk dapat menangkal COVID-19",
			"e Digambarnya aja banyak tuh macem-macem penyakit, tapi masih ada juga yang beli, heran..",
			"e Lagian kan paru-paru perokok tidak sehat, sehingga lebih beresiko terjangkit COVID-19 yang parah",
			"e Merokok juga tangannya kan dekat dengan mulut, jadi resiko terpaparnya lebih tinggi",
			"display message Infocorona",
		],

		"Tidakrokok": [
			"show e Happy with fadeIn",
			"e Yes ngga bener itu, yang percaya cuma Mas A sama perokok lain mungkin",
			"display message Infocorona",
		],

//
	}
};
