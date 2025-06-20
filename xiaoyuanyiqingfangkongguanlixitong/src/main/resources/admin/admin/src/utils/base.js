const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanyiqingfangkongguanlixitong/",
            name: "xiaoyuanyiqingfangkongguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanyiqingfangkongguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园疫情防控管理系统"
        } 
    }
}
export default base
