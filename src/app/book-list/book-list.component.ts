.section{
    margin: 0 !important;
}

.bookSection{
    background: #f5f5f5;
    padding: 0;
    // height: 100%;
    height: 640px;
    width: 500px;
    overflow-y: scroll;

    .book-list{    
        padding-top: 13%;
    }

    .header{
        background: #5454e9;
        color: #fff;
        height: 60px;
        padding: 10px;
        position: fixed;
        width: 500px;
    }
    
    .title{
        padding: 10px;
        font-size: 16px;
        text-transform: uppercase;
        color: #286090;
        margin-left: 10px;   
        padding-bottom: 0 !important;
    }

    .content{
        display: inline-block;
        padding: 10px 0px 10px 12px;
        margin-left: 5px;
    }

    .bookname{
        font-size: 10px;
        font-weight: 800;
        padding: 10px 3px 0px 3px;
        text-transform: uppercase;
        // width: 145px;
    }

    .authorname{
        font-size: 10px;
        padding: 2px 0px 0px 4px;
        font-weight: 600;
        color: #555;
    }

    .cancel{
        font-size: 12px;
        text-transform: uppercase;
        padding-top: 10px;
    }

    .searchIcon{
        position: relative;
        left: -6px;
        padding-bottom: 10px;
        width: 35px;
    }

    .searchInput{
        position: relative;
        left: -34px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        width: 310px;
        padding-bottom: 0px;
        padding-left: 30px;

        &:focus{
            outline: none !important;
        }
    }

    .closeIcon{
        position: relative;
        left: -35px;
        width: 26px;
        top: -40px;
        padding-bottom: 10px;
        bottom: 0px;
        right: 0;
        float: right;
    }

    div:focus{
        outline: none;
    }
}
