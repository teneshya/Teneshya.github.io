$(document).ready(function(){
        $('.name').click(function(){
            let isi = $(this).text();
            let isi2 = prompt('Ubah dengan:', );
            if(!isi2)return;
            $(this).text(isi2);
        })
         $('.alamat').click(function(){
            let isi = $(this).text();
            let isi2 = prompt('Ubah dengan:', );
            if(!isi2)return;
            $(this).text(isi2);
        })
        $('.Delete').click(function(){
            let yakin = confirm('Anda yakin ingin menghapus teman anda?');
            if(!yakin) return;

            let id = $(this).prop('id');
            let rid = id.split('__');
            let baris_ke = rid[1];

            $('#row__'+baris_ke).slideUp()
        })
        
})
