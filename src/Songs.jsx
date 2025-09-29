import React from 'react'
import Song from './Song'
import Footer from './Footer'
import "./styles.css"

export default function Songs(){
    return(
        <div className='min-h-screen flex flex-col sm:pt-[8.333vh] text-center'>
            <div className='flex-1 flex flex-col justify-around'>
                <Song 
                    title="Trầm Hương Đốt"
                    lyrics="Trầm hương đốt, xông ngát mười phương
                    Nguyện nguyện kính đức Nghiêm Từ vô lượng
                    Cầu cầu xin chứng tâm thành chúng con
                    Vần vần khói kết mây lành cúng dường
                    Ðạo nhiệm màu đã lang truyền nơi cùng nơi
                    Nhờ chân lý chúng sanh đều thoát luân hồi
                    Ðồng qúy kính qùy dưới đài sen
                    Dâng hoa thơm tinh khiết màu thắm tươi cành
                    Ðài quang minh sáng huy hoàng trang nghiêm
                    Ơn mười phương điều ngự hào quang an lành
                    Nhìn đạo uyển chuyễn soi khắp cùng quần sanh
                    Phật đạo đồng cùng nhau tu tin tấn mau viên thành
                    Nam mô Bổn Sư Thích Ca Mâu Ni Phật
                    Nam mô Bổn Sư Thích Ca Mâu Ni Phật"
                    className="flex-1"
                />
                <Song
                    title="Bốn Phương Trời"
                    lyrics="Bốn phương trời ta về đây chung vui,
                    Không phân chia giọng nói tiếng cười,
                    Cùng nắm tay ta kết tình thân ái,
                    Trao cho nhau những gì thiết tha (2 lần)"
                    className="flex-1"
                />
                <Song 
                    title="Anh Em Ta Về"
                    lyrics="Anh em ta về cùng nhau ta quây quần này, 1-2-3-4-5
                    Anh em ta về cùng nhau ta sum họp này, 5-4-3-2-1
                    Một đều chân bước nhé
                    Hai quay nhìn nhau đi
                    Ba cầm tay chắc nhé, ko muốn ai chia lìa
                    Bốn nhớ rằng chúng ta bốn bể anh em một nhà
                    Năm nhớ mãi tình người trong câu ca"
                    className="flex-1"
                />
                <Song
                    title="Hát To Hát Nhỏ"
                    lyrics="Ta hát to hát nhỏ nhỏ nhỏ
                    Rồi mình ngồi kể chuyện cho nhau nghe
                    Ta vui ca hát hát cho vui đời ta
                    Ta vui ca hát hát cho vui đời ta.
                    Ta hát to hát nhỏ nhỏ nhỏ
                    Rồi mình ngồi kể chuyện cho nhau nghe
                    Ta vui ca hát hát cho vui đời ta
                    Ta vui ca hát hát cho vui đời ta."
                    className="flex-1"
                />
                <Song
                    title="Dây Thân Ái"
                    lyrics="Dây thân ái lan rộng muôn nhà
                    Tay sắp xa nhưng tim không xa
                    Vui tươi ta biết trong lòng nhớ lòng
                    Ca hát trong không gian đơm hoa
                    Ðường tuy xa nhưng tình bao la
                    Tiến bước theo hương thơm nhà lưu truyền
                    Dù cách xa ngàn dặm nhưng gần
                    Gang thép ta chia tay đừng buồn"
                    className="flex-1"
                />
                <Song
                    title="Quốc Ca Việt Nam Cộng Hòa"
                    lyrics="Này công dân ơi, đứng lên đáp lời sông núi.
                    Đồng lòng cùng đi hy sinh tiếc gì thân sống.
                    Vì tương lai quốc dân, cùng xông pha khói tên,
                    Làm sao cho núi sông từ nay luôn vững bền.
                    Dù cho thây phơi trên gươm giáo.
                    Thù nước lấy máu đào đem báo.
                    Nòi giống lúc biến phải cần giải nguy,
                    Người công dân luôn vững bền tâm trí,
                    Hùng tráng quyết chiến đấu làm cho khắp nơi,
                    Vang tiếng người nước Nam cho đến muôn đời.
                    Công dân ơi! Mau hiến thân dưới cờ,
                    Công dân ơi! Mau làm cho cõi bờ,
                    Thoát cơn tàn phá vẻ vang nòi giống,
                    Xứng danh nghìn năm giống Lạc Hồng!"
                    className="flex-1"
                />
                <Song
                    title="Sen Trắng"
                    lyrics="Kìa xem đóa Sen Trắng thơm,
                    Nghìn hào quang chiếu sáng trên bùn
                    Hình dung Bổn Sư chúng ta,
                    Lòng Từ Bi Trí Giác vô cùng
                    Đồng thề nguyện một dạ theo Phật
                    Nguyện sửa mình ngày thêm tinh khiết
                    Đến bao giờ được tày Sen ngát
                    Tỏa hương thơm Từ Bi tận cùng."
                    className="flex-1"
                />
            </div>
            <Footer />
        </div>
    )
}