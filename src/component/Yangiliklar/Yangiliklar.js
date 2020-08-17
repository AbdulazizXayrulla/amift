import React from "react";
import s from './Yangiliklar.module.css'




const Yangiliklar = (props) => {



let posts=props.yangiliklar.mainContaint.map(e=><div className='col-md-12 mb-5'>
    <div className={s.postCard}>
<div className="pl-2">
    <div><span className={s.userTextColor}>User:</span>{e.userName}</div>
    <div><span className={s.dateTextColor}>Date:</span>{e.date}</div>
    <div className="mt-4"><img src={e.PostimageSrc} className={s.imageSize}/></div>
</div>
        <div className={s.postTextSize}>
            {e.PostText}
        </div>

    </div>
    <div className="mt-3">

        {e.isFollow?<button type='button' className='btn btn-danger' onClick={()=>props.Unfollow(e.userId)}>UnFollow</button>:
            <button type='button' className='btn btn-success'onClick={()=>props.follow(e.userId)}>Follow</button>


        }



        <span className='float-right'><img src="https://marvel-live.freetls.fastly.net/canvas/2020/8/9b1c6680c6fd4e2fad7ea497baac16aa?quality=95&fake=.png&width=54" alt="" className={s.iconSize}/> like {e.likesCount}</span>
        <span className='float-right px-5'><img src="https://marvel-live.freetls.fastly.net/canvas/2020/8/23d042048fc74e69a945443872677f36?quality=95&fake=.png&width=54" alt="" className={s.iconSize}/> comment {e.commentCount}</span>

    </div>

</div>)


    return (
        <div className={s.Yangiliklar}>
            <div className={s.fontSize}>Postlar</div>

<div className="col-md-8">

    {posts}
</div>

        </div>

    )
}
export default Yangiliklar