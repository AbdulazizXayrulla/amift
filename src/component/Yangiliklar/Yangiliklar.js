import React from "react";
import s from './Yangiliklar.module.css'



const Yangiliklar = (props) => {
    let PageCount = Math.ceil(props.totalCount / props.PageSize)
    let Pages = []
    for (let i = 1; i <= PageCount; i++) {
        Pages.push(i)
    }
    return <div className={s.Yangiliklar}>
        <div className={s.fontSize}>Postlar</div>

        <div className="col-md-8">


            {Pages.map(q => {
                if (q <= 10) {
                    return <span className={q == props.currentPage ? s.activPage : 'px-1'} onClick={() => {
                        props.onChangePage(q)
                    }}>{q}</span>
                }

            })}
            {props.yangiliklar.mainContaint.map(e => <div className='col-md-12 mb-5'>
                <div className={s.postCard}>
                    <div className="pl-2">
                        <div><span className={s.userTextColor}>User:</span>{e.name}</div>
                        <div><span className={s.dateTextColor}>Date:</span></div>
                        <div className="mt-4"><img
                            src={e.photos.small != null ? e.photos.small : 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'}
                            className={s.imageSize}/></div>
                    </div>
                    <div className={s.postTextSize}>

                    </div>

                </div>
                <div className="mt-3">

                    {e.followed ? <button type='button' className='btn btn-danger'
                                          onClick={() => props.Unfollow(e.id)}>UnFollow</button> :
                        <button type='button' className='btn btn-success'
                                onClick={() => props.follow(e.id)}>Follow</button>


                    }


                    <span className='float-right'><img
                        src="https://marvel-live.freetls.fastly.net/canvas/2020/8/9b1c6680c6fd4e2fad7ea497baac16aa?quality=95&fake=.png&width=54"
                        alt="" className={s.iconSize}/> like {e.likesCount}</span>
                    <span className='float-right px-5'><img
                        src="https://marvel-live.freetls.fastly.net/canvas/2020/8/23d042048fc74e69a945443872677f36?quality=95&fake=.png&width=54"
                        alt="" className={s.iconSize}/> comment {e.commentCount}</span>

                </div>

            </div>)}
        </div>

    </div>;
}

export default Yangiliklar