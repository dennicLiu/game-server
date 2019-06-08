import {Application} from 'pinus';
import {FrontendSession} from 'pinus';
import * as path from 'path';
import { getLogger } from 'pinus-logger';
const logger   =  getLogger("game",path.basename(__filename));

export default function (app: Application) {
    return new EntryHandler(app);
}

export class EntryHandler {
    public  uitl:any;
    public  resUtil :any;
    constructor(private app: Application) {
        this.uitl =app;
        this.resUtil = app.get("resUtil")
    }


    /**
     * New client entry chat server.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next stemp callback
     * @return {Void}
     */
    async enter(msg: { uid: number, sid: number }, session: FrontendSession) {
        try{
            let self = this;
            let sid = msg.sid;
            let uid:any = msg.uid;
            let sessionService = self.app.get('sessionService');

            // duplicate log in
            if (!!sessionService.getByUid(uid) ){
                return this.resUtil.fail("登录失败","LOGIN_FAIL")
            }

            if(!self.uitl||!self.uitl.rpc||!self.uitl.rpc.name){
                // 后期捕捉起服完成标志
                return this.resUtil.fail("登录失败","SERVER_NOT_READY")
            }

            let client  = self.uitl.get("account");
            let model  = client.GetModel("account");
            let  ret  = await model.find({account:uid,server:sid});
            let newUid:any;
            if(ret.length >0){
                newUid = ret[0].uid
            }else{
                let num  = await  model.countDocuments({});
                newUid = num+1+10000000 ;
                let obj = {
                    account:uid,
                    uid:newUid,
                    server:sid
                };
                await  model.create(obj);
            }

            await session.abind(newUid);
            session.set("uid", newUid);
            session.set("sid",sid);
            await session.apushAll();
            session.on('closed', this.onUserLeave.bind(this));
            return this.resUtil.success("登录成功","LOGIN_SUCCESS")
        }catch (e) {
            logger.info("登录失败 , reason:%s",e);
            return  this.resUtil.fail("登录失败","LOGIN_FAIL")
        }
    }

    /**
     * User log out handler
     *
     * @param {Object} app current application
     * @param {Object} session current session object
     *
     */
    onUserLeave(session: FrontendSession) {
        if (!session || !session.uid) {
            return;
        }
    }
}