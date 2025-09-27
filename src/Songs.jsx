import React from 'react'
import Song from './Song'
import Footer from './Footer'
import "./styles.css"

export default function Songs(){
    return(
        <div className='min-h-screen flex flex-col sm:pt-[8.333vh] text-center'>
            <div className='flex-1 space-y-3'>
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
                />
                <Song
                    title="Bốn Phương Trời"
                    lyrics="Bốn phương trời ta về đây chung vui,
                    Không phân chia giọng nói tiếng cười,
                    Cùng nắm tay ta kết tình thân ái,
                    Trao cho nhau những gì thiết tha (2 lần)"
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
                />
            </div>
            <Footer />
        </div>
    )
}