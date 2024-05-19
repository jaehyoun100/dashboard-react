import shopItem1 from "../img/shopingimg1.jpg";
import shopItem2 from "../img/shopingimg2.jpg";

export default function NewsStand({ page }) {
  const flex = {
    display: "flex",
    gap: "8px",
  };
  const content1 = {
    width: "248px",
    height: "375px",
  };
  const contentOne1 = {
    width: "226px",
    height: "75px",
    padding: "9px 11px 4px 11px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    background: "rgba(245, 248, 251, 0.6)",
  };
  const shopList = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    paddingBottom: "5px",
  };
  const a = {
    textDecorationLine: "none",
    color: "#000",
  };
  const contentOne2 = {
    width: "230px",
    height: "56px",
    padding: "9px",
    marginTop: "12px",
    display: "flex",
    border: "1px solid lightgray",
    borderRadius: "5px",
    background: "rgba(245, 248, 251, 0.6)",
    gap: "2px",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "14px",
  };
  const contentOne3 = {
    width: "246px",
    height: "144px",
    marginTop: "12px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    fontSize: "14px",
  };
  const content2 = {
    width: "522px",
    height: "375px",
    marginLeft: "20px",
  };
  const shopingItem = {
    width: "98px",
    height: "172px",
    paddingBottom: "14px",
    fontSize: "13px",
  };
  const img = {
    width: "96px",
    height: "124px",
  };
  const realimg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  };
  const imgComent = {
    paddingTop: "8px",
  };

  return (
    <>
      {page === 1 && (
        <>
          <div id="content1" style={content1}>
            <div id="contentOne1" style={contentOne1}>
              <div id="shopList1" style={shopList}>
                <div>
                  <a
                    style={a}
                    href="https://www.coupang.com/?src=1139997&spec=10799999&addtag=900&ctag=HOME&lptag=AF_NAVER&itime=20240520002819&pageType=HOME&pageValue=HOME&wPcid=17161324993967608449880&wRef=&wTime=20240520002819&redirect=landing&traceid=V0-181-0000000000000000&subid=mallname&mcid=cda0fec0b8b7417bbb642a8a1e1cf253"
                  >
                    쿠팡
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://www.gmarket.co.kr/?jaehuid=200003819&NaPm=ct%3Dlwdozfl4%7Cci%3Dcefd9d46d25e8be5ff318cf6b7e358ca3361c44a%7Ctr%3Dsbml%7Csn%3D24%7Cic%3D%7Chk%3D322c4b89291ab9ff7c2645c842787510ee813206"
                  >
                    G마켓
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://www.auction.co.kr/?BCODE=BN00076752&gate_id=d9484915-0f4e-4f26-8c3e-bfb600e9a749&ck=&sn=&igaw_eng=&airbridge_referrer=&appgate_guid="
                  >
                    옥션
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://www.11st.co.kr/main?code=1380&NaPm=ct=lwdozvsg|ci=29ae305496877eb5f6c2a491a3554aa199dd1014|tr=sbml|sn=17703|ic=|hk=5696aab7187d21a78009ba00e1d423eab44f3336&utm_term=&utm_campaign=%C5%D7%B8%B6%BC%EE%C7%CE-%B0%ED%C1%A4-2%C5%C7-%B8%F4%B8%ED%C5%D8%BD%BA%C6%AE-main&utm_source=%B3%D7%C0%CC%B9%F6_PC_P&utm_medium=%C6%F7%C5%D0+%C1%A6%C8%DE"
                  >
                    11번가
                  </a>
                </div>
              </div>
              <div id="shopList2" style={shopList}>
                <div>
                  <a
                    style={a}
                    href="https://www.ssg.com/?ckwhere=ssg_txt&NaPm=ct%3Dlwdp0ixs%7Cci%3Ddb4980f800f87d66e03325ddabf102293c8e7d60%7Ctr%3Dsbml%7Csn%3D218835%7Cic%3D%7Chk%3D2429ca36966e6b0c61884c943ac25a23e10029ab"
                  >
                    SSG닷컴
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&chlNo=1&chlDtlNo=53&_CAD=nmall153&utm_source=naver&utm_medium=shopping_box&utm_campaign=onpro_emnet_main_0101_1231&utm_content=pc&NaPm=ct=lwdp0mso|ci=bd0bf43844982b65273200cdc7c277c192f52a3d|tr=sbml|sn=197658|ic=|hk=87bfe19ab86504e35001ec1eb0c22e2fb1db8835"
                  >
                    올리브영
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://display.cjonstyle.com/p/homeTab/main?hmtabMenuId=H00005"
                  >
                    CJ온스타일
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://front.wemakeprice.com/main?utm_source=naver_mall&utm_medium=mall_name_naver&utm_campaign=naver_logo&NaPm=ct%3Dlwdp0wts%7Cci%3Da8646281665a76dab13204531d244a42513b8b5a%7Ctr%3Dsbml%7Csn%3D197023%7Cic%3D%7Chk%3D0208d5fabe87555521f84da2ec3af5748a8558a8"
                  >
                    위메프
                  </a>
                </div>
              </div>
              <div id="shopList3" style={shopList}>
                <div>
                  <a
                    style={a}
                    href="https://with.gsshop.com/index.gs?&media=z9&fromWith=Y"
                  >
                    GS SHOP
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://www.halfclub.com/main?_n_m2=h_naver_mall&gSeq=1103801177&partnerid=h_naver_mall&mt=20240520062950&NaPm=ct%3Dlwdp1968%7Cci%3D6571c57ef3fbbb8dd035fc609eefe141545c2077%7Ctr%3Dsbml%7Csn%3D270%7Cic%3D%7Chk%3Dc804a3fb89d5aee26d3ff79f5928737256dd6fea"
                  >
                    하프클럽
                  </a>
                </div>
                ᛫
                <div>
                  <a
                    style={a}
                    href="https://www.fashionplus.co.kr/?affiliate=naver_mn&utm_source=naver&utm_medium=mn&NaPm=ct%3Dlwdp1d14%7Cci%3D3977db36675e5a0c73cb3821da2654359f352ffb%7Ctr%3Dsbml%7Csn%3D883%7Cic%3D%7Chk%3D3ff83305b86a9d7b99e588ceb5be6bac3d61d4de"
                  >
                    패션플러스
                  </a>
                </div>
              </div>
            </div>
            <div id="contentOne2" style={contentOne2}>
              <div>
                <a style={a} href="https://shopping.naver.com/home">
                  쇼핑홈
                </a>
              </div>
              ᛫
              <div>
                <a
                  style={a}
                  href="https://shopping.naver.com/my/writable-reviews"
                >
                  리뷰적립
                </a>
              </div>
              ᛫
              <div>
                <a
                  style={a}
                  href="https://new-m.pay.naver.com/pcpay?serviceCategory=SHOPPING"
                >
                  주문
                </a>
              </div>
              ᛫
              <div>
                <a style={a} href="https://shopping.naver.com/cart">
                  장바구니
                </a>
              </div>
            </div>
            <div id="contentOne3" style={contentOne3}>
              <a
                style={a}
                href="https://mintedshop.co.kr/product/detail.html?product_no=258&utm_source=naver&utm_medium=focus&cafe_mkt=nvs_focus01&NaPm=ct%3Dlwdoz0xc%7Cci%3D978adfc18b3aa92d6cd1bd15a32e1f754956c89b%7Ctr%3Dsbsf%7Csn%3D6345894%7Cic%3D%7Chk%3Ddc1f6e55a16864005262ed49cd2d7cc97220efea"
              >
                <div>
                  <img src={shopItem2} style={realimg} alt="img" />
                </div>
                <div style={{ marginTop: 8, height: 19, textAlign: "center" }}>
                  최대 3달 사용가능한 세정제 5천원대
                </div>
              </a>
            </div>
          </div>
          <div id="content2" style={content2}>
            <div id="flex" style={flex}>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
            </div>
            <div id="flex" style={flex}>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
              <div id="shopingItem" style={shopingItem}>
                <div id="img" style={img}>
                  <img src={shopItem1} style={realimg} alt="img" />
                </div>
                <div id="imgComent" style={imgComent}>
                  딱한번 사더라도 제대로 만든 옷~
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
