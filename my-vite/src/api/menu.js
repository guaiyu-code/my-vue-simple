import service from '@/utils/request'


export const asyncMenu = () => {
    return service({
        url: '/menu/getMenu',
        method: 'post'
    })
}

// @Summary 获取menu列表
// @Produce  application/json
// @Param {
//  page     int
//	pageSize int
// }
// @Router /menu/getMenuList [post]
export const getMenuList = (data) => {
    return service({
        url: '/menu/getMenuList',
        method: 'post',
        data
    })
}