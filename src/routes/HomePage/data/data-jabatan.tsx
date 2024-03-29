const data_jabatan = [
  "ANALIS KEBIJAKAN",
  "ANALIS KEBIJAKAN BIDANG GAKKUM KORLANTAS POLRI",
  "ANALIS KEBIJAKAN MADYA BIDANG GAKKUM KORLANTAS POLRI",
  "ANALIS KEBIJAKAN MADYA BIDANG KAMSEL KORLANTAS POLRI",
  "ANALIS KEBIJAKAN MADYA BIDANG REGIDENT KORLANTAS POLRI",
  "ANALIS KEBIJAKAN MADYA BIDDIKMAS DITKAMSEL KORLANTAS POLRI",
  "ANJAK MADYA",
  "ANJAK MADYA PADA SUBBAG SDM BAGRENMIN KORLANTAS POLRI",
  "BAMIN",
  "BAMIN BAGOPS KORLANTAS POLRI (PAMWAL DIREKTUR PT JASA RAHARJA)",
  "BAMIN BAGRENMIN KORLANTAS POLRI (ATLET POPSIVO POLWAN)",
  "BAMIN BAGRENMIN KORLANTAS POLRI (BKO Bhayangkara FC)",
  "BAMIN BAGRENMIN KORLANTAS POLRI (BKO HARTIB)",
  "BAMIN SUBBAGREN BAGRENMIN KORLANTAS POLRI",
  "BAMIN SUBDIT AUDIT DAN INSPEKSI DITKAMSEL KORLANTAS POLRI (DRIVER KASESPIM LEMDIKLAT POLRI)",
  "BAMIN SUBDIT BPKB DITREGIDENT KORLANTAS POLRI (PAMWAL KEMENPORA RI, PENUGASAN MENTERI DALAM NEGERI)",
  "BAMIN SUBDIT DAKGAR DITGAKKUM",
  "BAMIN SUBDIT DIKMAS DITKAMSEL",
  "BAMIN SUBDIT FASMAT SBST DITREGIDENT",
  "BAMIN SUBDIT JEMENOPSREK DITKAMSEL",
  "BAMIN SUBDIT LAKA DITGAKKUM",
  "BAMIN SUBDIT SBST DITREGIDENT",
  "BAMIN SUBDIT SIM DITREGDIENT",
  "BAMIN SUBDIT STANDAR CEGAH DAN TINDAK DITKAMSEL",
  "BAMIN SUBDIT STANDARDISASI CEGAH DAN TINDAK DITKAMSEL",
  "BAMIN SUBDIT STNK DITREGIDENT",
  "BAMIN SUBDIT TATIB DITGAKKUM",
  "BAMIN SUBDITLAKA DITGAKKUM",
  "BAMIN SUBDITWAL DAN PJR DITGAKKUM",
  "BAMIN TAUD",
  "BAMIN URMIN BAGRENMIN",
  "BAMIN URMIN SUBDIT DAKGAR DITGAKKUM",
  "BAMIN URMIN SUBDIT LAKA DITGAKKUM",
  "BAMIN URMIN SUBDITTATIB DITGAKKUM",
  "BAMIN URTU DITGAKKUM",
  "BAMIN URTU DITKAMSEL",
  "BAMIN URTU DITREGIDENT",
  "BAMIN WATPERS SUBBAG SDM BAGRENMIN",
  "BANIT",
  "BANIT SUBDIT WAL DAN PJR DITGAKKUM",
  "BANIT WALSUS SUBDIT WAL DAN PJR ",
  "BANIT WALUM SUBDIT WAL DAN PJR DITGAKKUM",
  "BANUM",
  "BANUM BAGOPS",
  "BANUM BAGRENMIN",
  "BANUM BAGTIK",
  "BANUM DITREGIDENT",
  "BANUM HARTIB PD SUBBAG SDM BAGRENMIN",
  "BANUM PENDATAAN DAN PENYIMPANAN MAT SBST DITREGIDENT",
  "BANUM SUBBAG ADA BAGRENMIN",
  "BANUM SUBBAG LOG BAGRENMIN",
  "BANUM SUBDIT AUDIT DAN INSPEKSI DITKAMSEL",
  "BANUM SUBDIT JEMENOPSREK DITKAMSEL",
  "BANUM SUBDIT LAKA DITGAKKUM",
  "BANUM SUBDIT SBST DITREGIDENT",
  "BANUM SUBDIT SIM DITREGIDENT",
  "BANUM SUBDIT STNK DITREGIDENT",
  "BANUM SUBDIT TATIB DITGAKKUM",
  "BANUM SUBDIT WAL DAN PJR DITGAKKUM",
  "BANUM TAUD",
  "BANUM URMIN BAGRENMIN",
  "BANUM URMIN DITGAKKUM",
  "BANUM URMIN DITKAMSEL",
  "BANUM URTU DITKAMSEL",
  "BANUM URTU DITREGIDENT",
  "BHANYANGKARA",
  "BHANYANGKARA ADMINISTRASI PENYELIA DITREGIDENT",
  "BHANYANGKARA ADMINISTRASI PENYELIA SUBDITWAL  DAN PJR DITGAKKUM",
  "BHAYANGKARA ADMINISTRASI PENYELIA BAGOPS",
  "BHAYANGKARA ADMINISTRASI PENYELIA BAGRENMIN",
  "BHAYANGKARA ADMINISTRASI PENYELIA DITGAKKUM",
  "BHAYANGKARA ADMINISTRASI PENYELIA DITKAMSEL",
  "BHAYANGKARA ADMINISTRASI PENYELIA DITREGIDENT",
  "BHAYANGKARA ADMINISTRASI PENYELIA SIKEU",
  "BHAYANGKARA ADMINISTRASI PENYELIA SUBBAG SDM BAGRENMIN",
  "BHAYANGKARA ADMINISTRASI PENYELIA SUBDIT DAKGAR DITGAKKUM",
  "BHAYANGKARA ADMINISTRASI PENYELIA SUBDIT SBST DITREGIDENT",
  "BHAYANGKARA ADMINISTRASI PENYELIA SUBDIT SIM DITREGIDENT",
  "BHAYANGKARA ADMINISTRASI PENYELIA SUBDIT STNK DITREGIDENT",
  "BHAYANGKARA ADMINISTRASI PENYELIA SUBDITWAL DAN PJR DITGAKKUM",
  "BHAYANGKARA ADMINISTRASI PENYELIA WALSUS PADA SUBDIT WAL DAN PJR DITGAKKUM",
  "BHAYANGKARA ADMINITASI PENYELIA SUBDITWAL DAN PJR DITGAKKUM",
  "BHAYANGKARA OPERASIONAL PENYELIA SIWALSUS SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "DIRGAKKUM",
  "DIRGAKKUM KORLANTAS POLRI",
  "DIRKAMSEL",
  "DIRKAMSEL KORLANTAS POLRI",
  "KA INDUK",
  "KA INDUK BORR SUBDITWAL DAN PJR DITGAKKUM",
  "KA INDUK BSD SUBDITWAL DAN PJR DITGAKKUM",
  "KA INDUK CIKAMPEK SUBDITWAL DAN PJR DITGAKKUM",
  "KA INDUK CIPULARANG SUBDITWAL DAN PJR DITGAKKUM",
  "KA INDUK SERANG SUBDIT WAL DAN PJR DITGAKKUM",
  "KABAG",
  "KABAG TIK",
  "KABAGOPS",
  "KABAGRENMIN",
  "KAKORLANTAS",
  "KANIT",
  "KANIT 1 INDUK BITUNG SUBDITWAL DAN PJR DITGAKKUM",
  "KANIT I WALUM SUBDIT WAL DAN PJR DITGAKKUM",
  "KANIT II WALUM SUBDIT WAL DAN PJR DITGAKKUM",
  "KASI",
  "KASI ANEV SBST SUBDIT SBST DITREGIDENT",
  "KASI ANEV SUBDIT BPKB DITREGIDENT",
  "KASI AUDIT KAMSEL SUBDIT AUDIT DAN INSPEKSI DITKAMSELKASI BINWAS SUBDIT DAKGAR DITGAKKUM KASI BINYAN SUBDIT SIM DITREGIDENT",
  "KASI DAPANMAT SUBDIT SBST DITREGIDENT",
  "KASI DIKPEN SUBDIT DIKMAS DITKAMSEL",
  "KASI DISMAT SBST SUBDIT FASILITASI MAT SBST DITREGIDENT",
  "KASI DUKDIKMAS SUBDIT DIKMAS DITKAMSEL",
  "KASI GUNRANMOR SUBDIT TATIB DITGAKKUM",
  "KASI INSPEKSI SUBDIT AUDIT DAN INSPEKSI DITKAMSEL",
  "KASI JIANREK SUBDIT JEMENOPSREK DITKAMSEL",
  "KASI JIANTA DAN TURJAWALI SUBDIT TATIB DITGAKKUM",
  "KASI KEU",
  "KASI MITRA SUBDIT LAKA DITGAKKUM",
  "KASI OPSNALREK SUBDIT JEMENOPSREK DITKAMSEL",
  "KASI PJR SUBDIT WAL DAN PJR DITGAKKUM",
  "KASI PULLAHJIANTA SUBDITLAKA DITGAKKUM",
  "KASI STANDAR KEPEMILIKAN RANMOR SUBDIT BPKB DITREGIDENT",
  "KASI STANDAR PENGEMUDI SUBDIT SIM DITREGIDENT",
  "KASI STANDAR SUBDIT STNK DITREGIDENT",
  "KASI STANDAR TINDAK SUBDIT STANDAR CEGAH DAN TINDAK DITKAMSEL",
  "KASIINVIDREK SUBDIT JEMENOPSREK DITKAMSEL",
  "KASISIDIKLAKA DITGAKKUM",
  "KASIWAL SUBDITWAL DAN PJR DITGAKKUM",
  "KASUBBAG",
  "KASUBBAG ANEV BAGOPS",
  "KASUBBAG DALOPS BAGOPS",
  "KASUBBAG JARSISTEK BAG TIK",
  "KASUBBAG LOG BAGRENMIN",
  "KASUBBAG REN BAGRENMIN",
  "KASUBBAG RENOPS BAGOPS",
  "KASUBBAG SDM BAGRENMIN",
  "KASUBBAGANGBANGSISTEK BAGTIK",
  "KASUBDIT",
  "KASUBDIT AUDIT DAN INSPEKSI DITKAMSEL",
  "KASUBDIT BPKB DITREGIDENT",
  "KASUBDIT DAKGAR DITGAKKUM",
  "KASUBDIT DIKMAS DITKAMSEL",
  "KASUBDIT FASMAT SBST DITREGIDENT KORLANTAS POLRI",
  "KASUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "KASUBDIT LAKA DITGAKKUM KORLANTAS POLRI",
  "KASUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "KASUBDIT STANDAR CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "KASUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "KASUBDIT TATIB DITGAKKUM KORLANTAS POLRI",
  "KASUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "KAUR",
  "KAUR ANEV STNK SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "KAUR AUDIT SUBDIT AUDIT DAN INSPEKSI DITKAMSEL KORLANTAS POLRI",
  "KAUR BINYAN SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "KAUR DAPANMAT SUBDIT FASMAT SBST DITREGIDENT KORLANTAS POLRI",
  "KAUR DIKPEN SUBDITDIKMAS DITKAMSEL KORLANTAS POLRI",
  "KAUR INSPEKSI SUBDIT AUDIT DAN INSPEKSI DITKAMSEL KORLANTAS POLRI",
  "KAUR INVIDREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "KAUR JIANREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "KAUR PULLAH JIANTA LAKA SUBDIT LAKA DITGAKKUM KORLANTAS POLRI",
  "KAUR STANDARISASI KEPEMILIKAN RANMOR SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "KAUR STNK SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "KAUR TAPSTANDAR CEGAH SUBDIT STANDARDISASI CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "KAUR TAPSTANDAR SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "KAURMIN",
  "KAURMIN BAGOPS KORLANTAS POLRI",
  "KAURMIN BAGTIK KORLANTAS POLRI",
  "KAURMIN BPKB SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "KAURMIN SUBBID JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "KAURMIN SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "KAURMIN SUBDIT LAKA DITGAKKUM KORLANTAS POLRI",
  "KAURMIN SUBDIT SBST DITREGIDENT KORLANTAS POLRI",
  "KAURMIN SUBDIT STANDARDISASI CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "KAURMIN SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "KAURMIN SUBDITTATIB DITGAKKUM KORLANTAS POLRI",
  "KAURTU",
  "KAURTU DITGAKKUM KORLANTAS POLRI",
  "KAURTU DITKAMSEL KORLANTAS POLRI",
  "KAURTU DITREGIDENT KORLANTAS POLRI",
  "PAMA",
  "PAMA BAGRENMIN KORLANTAS POLRI",
  "PAMEN",
  "PAMEN BAGRENMIN KORLANTAS POLRI (DIK S2 UI )",
  "PAMEN BAGRENMIN KORLANTAS POLRI (DIK S3 LUAR NEGERI)",
  "PAMEN DITGAKKUM KORLANTAS POLRI (DIK SESPIMMEN T.A. 2024)",
  "PAMIN",
  "PAMIN AKUNTASI / VERIFIKASI KEU KORLANTAS POLRI",
  "PAMIN ANEV BAGOPS KORLANTAS POLRI",
  "PAMIN ANEV MAT SBST SUBDIT FASILITASI MAT SBST DITREGIDENT KORLANTAS POLRI",
  "PAMIN ANEV SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PAMIN ANEV SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PAMIN ANEV SUBDIT STNK DITREGDIENT KORLANTAS POLRI",
  "PAMIN AUDIT SUBDIT AUDIT DAN INSPEKSI DITKAMSEL KORLANTAS POLRI",
  "PAMIN BINFUNG SUBBAG SDM BAGRENMIN KORLANTAS POLRI",
  "PAMIN BINKAR SUBBAG SDM BAGRENMIN KORLANTAS POLRI",
  "PAMIN BINWAS SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PAMIN BINYAN SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PAMIN BINYAN SUBDIT SIM DITREGIDENT KORLANTAS POLRI (BKO PD POLIKLINIK)",
  "PAMIN BINYAN SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "PAMIN DALOPS SUBBAG DALOPS BAGOPS KORLANTAS POLRI",
  "PAMIN DATA SIKEU KORLANTAS POLRI",
  "PAMIN DIKPEN SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PAMIN DISMAT SBST SUBDIT FASMAT SBST DITREGIDENT KORLANTAS POLRI",
  "PAMIN DUKDIKMAS SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PAMIN GAJI KEU KORLANTAS POLRI",
  "PAMIN GUNRANMOR SUBDITTATIB DITGAKKUM  KORLANTAS POLRI",
  "PAMIN HARSISTEK SUBBAG HARSISTEK BAGTIK KORLANTAS POLRI",
  "PAMIN INDUK BITUNG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN INDUK BORR SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN INDUK BSD SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN INDUK CIKAMPEK SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN INDUK CIPULARANG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN INDUK JAGORAWI SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN INDUK SERANG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN INFOPERS SUBBAG SDM BAGRENMIN KORLANTAS POLRI",
  "PAMIN INSPEKSI SUBDIT  AUDIT DAN INSPEKSI DITKAMSEL KORLANTAS POLRI",
  "PAMIN INVIDREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "PAMIN JIANREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "PAMIN JIANTA DAN TURJAWALI SUBDITTATIB DITGAKKUM KORLANTAS POLRI",
  "PAMIN KEMITRAAN SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PAMIN KERMA DALGRI BAGOPS KORLANTAS POLRI",
  "PAMIN KERMA LUGRI SUBBAG KERMA BAGOPS KORLANTAS POLRI",
  "PAMIN MITRA SUBDITLAKA DITGAKKUM KORLANTAS POLRI",
  "PAMIN OPS SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN OPSNALREK SUBDITJEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "PAMIN PENDATAAN DAN PENYIMPANAN MAT SBST DITREGIDENT KORLANTAS POLRI",
  "PAMIN PULLAH JIANTA LAKA SUBDIT LAKA  DITGAKKUM KORLANTAS POLRI",
  "PAMIN PULLAHJIANTA SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PAMIN RBP SUBBAGREN BAGRENMIN KORLANTAS POLRI",
  "PAMIN RENOPS SUBBAG RENOPS BAGOPS KORLANTAS POLRI",
  "PAMIN SI PJR SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN SIDIKLAKA SUBDITLAKA DITGAKKUM KORLANTAS POLRI",
  "PAMIN STANDAR CEGAH SUBDIT STANDAR CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "PAMIN STANDAR PENGEMUDI SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PAMIN STANDAR STNK SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "PAMIN STANDAR TINDAK SUBDIT STANDAR CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "PAMIN STANDARISASI KEPEMILIKAN RANMOR SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PAMIN SUBBAG ADA BAGRENMIN KORLANTAS POLRI",
  "PAMIN SUBBAG ANBANGSISTEK BAGTIK KORLANTAS POLRI",
  "PAMIN SUBBAG JARSISTEK BAGTIK KORLANTAS POLRI",
  "PAMIN SUBBAG LOG BAGRENMIN KORLANTAS POLRI",
  "PAMIN TAPSTANDAR SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PAMIN URDAL TAUD KORLANTAS POLRI",
  "PAMIN URMIN SIKEU KORLANTAS POLRI",
  "PAMIN URMIN SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN URTU DITGAKKUM KORLANTAS POLRI",
  "PAMIN URTU DITKAMSEL KORLANTAS POLRI",
  "PAMIN URTU DITREGIDENT KORLANTAS POLRI",
  "PAMIN WALSUS SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN WALUM SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAMIN WATPERS SUBBAG SDM BAGRENMIN KORLANTAS POLRI",
  "PAMINREN SUBBAGREN BAGRENMIN KORLANTAS POLRI",
  "PANIT",
  "PANIT I NTMC BAGOPS KORLANTAS POLRI",
  "PANIT II NTMC BAGOPS KORLANTAS POLRI",
  "PANIT III NTMC BAGOPS KORLANTAS POLRI",
  "PATI",
  "PATI KORLANTAS POLRI (PENUGASAN PD IPDN)",
  "PAUR",
  "PAUR ADA SUBBAG ADA BAGRENMIN KORLANTAS POLRI",
  "PAUR ANEV SUBDIT SBST DITREGIDENT KORLANTAS POLRI",
  "PAUR AUDIT SUBDIT AUDIT DAN INSPEKSI DITKAMSEL KORLANTAS POLRI",
  "PAUR BINWAS SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PAUR BINYAN SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PAUR DUKDIKMAS SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PAUR INVIDREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "PAUR NTMC BAGOPS KORLANTAS POLRI",
  "PAUR PULLAHJIANTA SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PAUR RENOPS SUBBAG RENOPS BAGOPS KORLANTAS POLRI",
  "PAUR SIINPEKSI SUBDIT AUDIT DAN INSPEKSI DITKAMSEL KORLANTAS POLRI",
  "PAUR STANDAR CEGAH SUBDIT STANDARDISASI CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI (BKO HARTIB)",
  "PAUR STANDAR KEPEMILIKAN RANMOR SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PAUR STANDAR STNK SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "PAUR STANDAR TINDAK SUBDIT STANDAR CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "PAUR STANDARDISASI PENGEMUDI SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PAUR TAPSTANDAR SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PAUR WALSUS SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAUR WALUM SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PAURREN SUBBAGREN BAGRENMIN KORLANTAS POLRI",
  "PAURWATPERS SUBBAG SDM BAGRENMIN KORLANTAS POLRI",
  "PNS",
  "PNS BAGRENMIN KORLANTAS POLRI (POLIKLINIK)",
  "PNS TAUD KORLANTAS POLRI (YANPIM)",
  "PS KA",
  "PS KA INDUK BITUNG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KA INDUK JAGORAWI SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT",
  "PS KANIT I INDUK BORR SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT I INDUK CIKAMPEK SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT I INDUK CIPULARANG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT I INDUK JAGORAWI SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT I INDUK SERANG SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT I WALSUS SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II INDUK BITUNG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II INDUK BORR SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II INDUK BSD SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II INDUK CIKAMPEK SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II INDUK CIPULARANG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II INDUK JAGORAWI SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II INDUK SERANG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT II WALSUS SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III INDUK BITUNG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III INDUK BORR SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III INDUK BSD SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III INDUK CIKAMPEK SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III INDUK CIPULARANG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III INDUK JAGORAWI SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III INDUK SERANG SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III WALSUS SUBDITWAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KANIT III WALUM SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS KASI",
  "PS KASI ANEV STNK SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "PS KASI STANDAR CEGAH SUBDIT STANDAR CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "PS KASUBBAG",
  "PS KASUBBAG HARSISTEK BAGTIK KORLANTAS POLRI",
  "PS KASUBBAG KERMA BAGOPS KORLANTAS POLRI",
  "PS KATAUD",
  "PS KATAUD KORLANTAS POLRI",
  "PS KAUR",
  "PS KAUR ANEV SBST SUBDIT SBST DITREGIDENT KORLANTAS POLRI",
  "PS KAUR ANEV SIM SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PS KAUR ANEV SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PS KAUR BINWAS SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PS KAUR BINYAN SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PS KAUR BINYAN SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "PS KAUR DISMAT SUBDIT SBST DITREGIDENT KORLANTAS POLRI",
  "PS KAUR DUKDIKMAS SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PS KAUR JIANTA DAN TURJAWALI SUBDITTATIB DITGAKKUM KORLANTAS POLRI",
  "PS KAUR OPSNALREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "PS KAUR PULLAHJIANTA SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PS KAUR SIDIKLAKA SUBDITLAKA DITGAKKUM KORLANTAS POLRI",
  "PS KAUR STANDAR PENGEMUDI SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PS KAUR STANDAR TINDAK SUBDIT STANDARDISASI CEGAH DAN TINDAK DITKAMSEL KORLANTAS POLRI",
  "PS KAURMIN",
  "PS KAURMIN DAKGAR SUBDIT DAKGAR DITGAKKUM KORLANTAS POLRI",
  "PS KAURMIN SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PS KAURMIN SUBDIT WAL DAN PJR DITGAKKUM KORLANTAS POLRI",
  "PS PAMIN",
  "PS PAMIN URTU TAUD KORLANTAS POLRI (YANPIM)",
  "PS PAMIN YANPIM TAUD KORLANTAS POLRI",
  "PS PAUR",
  "PS PAUR ANBANGSISTEK SUBBAG ANBANGSISTEK BAGTIK KORLANTAS POLRI",
  "PS PAUR ANEV SUBBAG ANEV BAGOPS KORLANTAS POLRI",
  "PS PAUR ANEV SUBDIT BPKB DITREGIDENT KORLANTAS POLRI",
  "PS PAUR ANEV SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PS PAUR ANEV SUBDIT STNK DITREGIDENT KORLANTAS POLRI",
  "PS PAUR BINKAR SUBBAG SDM BAGRENMIN KORLANTAS POLRI",
  "PS PAUR BINYAN SUBDIT SIM DITREGIDENT KORLANTAS POLRI",
  "PS PAUR BINYAN SUBDIT STNK DITREGDIENT KORLANTAS POLRI",
  "PS PAUR DALOPS SUBBAG DALOPS BAGOPS KORLANTAS POLRI",
  "PS PAUR DAPANMAT SUBDIT FASMAT SBST DITREGIDENT KORLANTAS POLRI",
  "PS PAUR DIKPEN SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PS PAUR DISMAT SUBDIT SBST DITREGIDENT KORLANTAS POLRI",
  "PS PAUR GUNRANMOR SUBDITTATIB DITGAKKUM KORLANTAS POLRI",
  "PS PAUR HARSISTEK BAGTIK KORLANTAS POLRI",
  "PS PAUR JARSISTEK BAGTIK KORLANTAS POLRI",
  "PS PAUR JIANREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "PS PAUR JIANTA DAN TURJAWALI SUBDITTATIB DITGAKKUM KORLANTAS POLRI",
  "PS PAUR KEMITRAAN SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PS PAUR KERMA DALGRI BAGOPS KORLANTAS POLRI",
  "PS PAUR KERMA LUGRI BAGOPS KORLANTAS POLRI",
  "PS PAUR LOG SUBBAGLOG BAGRENMIN KORLANTAS POLRI",
  "PS PAUR MITRA SUBDITLAKA DITGAKKUM KORLANTAS POLRI",
  "PS PAUR OPSNALREK SUBDIT JEMENOPSREK DITKAMSEL KORLANTAS POLRI",
  "PS PAUR PULLAHJIANTA SUBDIT LAKA DITGAKKUM KORLANTAS POLRI",
  "PS PAUR SIDIKLAKA SUBDITLAKA DITGAKKUM KORLANTAS POLRI",
  "PS. KAUR KEMITRAAN SUBDIT DIKMAS DITKAMSEL KORLANTAS POLRI",
  "PATI KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
  "ANALISIS KEBIJAKAN DITKAMSEL KORLANTAS POLRI",
  "PAMEN DITKAMSEL KORLANTAS POLRI",
  "PAMEN KORLANTAS POLRI",
  "PAMA KORLANTAS POLRI",
  "BA KORLANTAS POLRI",
  "BHAYANGKARA ADMINISTRASI PENYELIA KORLANTAS POLRI",
];

export default data_jabatan;