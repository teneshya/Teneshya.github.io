$(document).ready(function(){
	$('.friends').click(function(){
		let isi = $(this).text();
		let tid = $(this).prop('id');
		let rid = tid.split('__');
		let id_baris = rid[1];
		let nmw = $('#nmw__'+id_baris).text();

		if(isi=='Delete'){
			let yakin = confirm(`Yakin mau menghapus data ${nmw} ??`);
			if(!yakin) return;

			$('#baris__'+id_baris).fadeOut();
		}else{
			alert('Aksi lain untuk Cell ini belum ada. Terimakasih sudah mencoba.')
		}
	})
})

