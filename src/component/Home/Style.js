import {styled} from '@mui/material/styles';

export const HomeStyle = styled('div')(({theme}) => ({
    '& .nav-position': {
        position: "fixed",
        width: "100%",
        top: "0px",
        zIndex: "10",
    },
    '& .Appbar-setting': {
        background: "transparent",
        boxShadow: "none",
        marginTop: "40px",
        borderRadius: "30px",
        '& .MuiToolbar-root': {
            padding: "unset",

        },


        '& .MuiList-root': {
            display: "inline-flex",
            marginTop: "10px",

        },
        '& .MuiListItem-root': {
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
        },

        // '& .MuiListItem-root':{
        //     paddingRight:"unset",
        // },
        '& .github': {
            height: "48px",
            width: "48px",
            cursor: "pointer",
            background: "rgba(22, 22, 22, 0.8)",
            borderRadius: "40px",
            '&:hover': {
                backdropFilter: "blur(4px)",
                //Eclaircissement
                background: "rgba(22, 22, 22, 0.1)",
            }
        },

        '& .right-nav': {
            textAlign: "end",
            '& .MuiList-root': {
                marginTop: "unset",
            },
        },
        '& .menu-setting': {
            color: "#5911d9"
        },
    },
    '& .nav-list-bg-rounded': {
        background: "rgba(22, 22, 22)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "100px",
        height: "58px",
    },
    '& .logo': {
        width: "34px",
        height: "34px",
    },
    '& .MuiButton-containedPrimary': {
        cursor: "pointer",
        background: "linear-gradient(96.34deg, rgba(82, 39, 255, 0.8) 0%, rgba(97, 0, 255, 0.8) 100%), radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.256) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        boxShadow: "inset 0px -2px 2px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(255, 255, 255, 0.4)",
        borderRadius: "32px",
        '&:hover': {
            background: "linear-gradient(96.34deg, rgba(82, 39, 255, 0.8) 0%, rgba(97, 0, 255, 0.8) 100%), radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.32) 100%)",
        }
    },
    '& .aplybtn': {
        height: "48px",
        width: "134px",

    },

    '& .nav-btn': {
        color: "#B7B5BA !important",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        textTransform: "capitalize",
        '&:hover': {
            color: "#8D8A93 !important",
        }
    },

    '& .mob-draw': {
        '& .MuiList-root': {
            display: "inline-block !important",
        },

        '& .MuiListItemButton-root': {
            color: "#B7B5BA !important",
        },
    },
    '& .Genius-text': {
        color: "#FFFFFF !important",
        fontSize: "64px",
        fontFamily: "PlusJakartaSans-Bold",
        marginTop: "234px",
        textAlign: "center",

    },
    '& .Blockhub-text': {
        color: "#FFFFFF !important",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        textAlign: "center",
        lineHeight: "24px",
    },
    '& .geniusbtn': {
        width: "166px",
        height: "50px",
        marginTop: "20px",
        marginBottom: "20px",
    },

    '& .portfolio-text': {
        color: "#FFFFFF !important",
        fontSize: "48px",
        fontFamily: "PlusJakartaSans-Bold",
    },
    '& .meme': {
        color: "#8D8A93",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        lineHeight: "24px",
    },
    '& .port-card': {
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "32px",
    },
    '& .port-card-2': {
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "32px",
        height: "529px",
    },
    '& .shutter-img': {
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
    },
    '& .shtrpadign': {
        padding: "17px",
    },
    '& .Network-text': {
        color: "#FFFFFF",
        fontSize: "20px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "24px",
    },
    '& .Apparently-text': {
        color: "#B7B5BA",
        fontSize: "14px",
        fontFamily: "Inter-Medium",
        lineHeight: "21px",
    },
    '& .join-bg': {
        background: "radial-gradient(49.43% 50% at 50% 50%, #1F143A 0%, #141414 100%)",
        padding: "40px",
    },
    '& .Revolution': {
        color: "#FFFFFF",
        fontSize: "36px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "21px",
        textAlign: "center",
        padding: " 37px 0px",
    },
    '& .thrilled-text': {
        color: "#8D8A93",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        lineHeight: "24px",
        textAlign: "center",
    },
    '& .thesis': {
        color: "#FFFFFF",
        fontSize: "48px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "64px",
        textAlign: "center",
        marginTop: "60px",
    },
    '& .Ponzi': {
        color: "#FFFFFF",
        fontSize: "20px",
        fontFamily: "PlusJakartaSans-Bold",
    },
    '& .list-investment': {
        display: "inline-flex",
        '& .MuiListItem-root': {
            width: "unset",
        },
    },

    '& .thrilled-text-2': {
        color: "#8D8A93",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        lineHeight: "24px",

    },
    '& .Asset-text': {
        color: "#FFFFFF",
        fontSize: "18px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "30px",
    },
    '& .March-text': {
        color: "#8D8A93",
        fontSize: "14px",
        fontFamily: "Inter-Medium",
        lineHeight: "21px",
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    '& .colapsebtn': {
        background: " radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        position: "relative",
        borderRadius: "32px",
        '& svg': {
            position: "absolute",
            right: "19px",
        },
    },

    '& .colapse-bg': {
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "24px",
    },
    '& .colapse-inner-pd': {
        padding: "15px",
    },
    '& .fotterbg': {
        background: "#141414",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "50px",
        paddingBottom: "50px",
    },
    '& .gettouch': {
        color: "#FFFFFF",
        fontSize: "16px",
        fontFamily: "PlusJakartaSans-Bold",
    },
    '& .ftraply': {
        fontSize: "14px",
        width: "130px",
        marginTop: "15px",
    },


    '& .copy-text': {
        color: "#B7B5BA",
        fontSize: "12px",
        fontFamily: "Inter-Medium",
        lineHeight: "21px",
        marginTop: "120px",
    },
    '& .email': {
        cursor: "pointer",
        textDecoration: "underline",

    },
    '& .ftricon': {
        height: "36px",
        width: "36px",
        cursor: "pointer",
    },

    '& .ftrlist': {
        '& .MuiList-root': {
            display: "inline-flex",
        },
        '& .MuiListItem-root': {
            paddingLeft: "unset",
        },
    },

    //  lg down started

    [theme.breakpoints.down('lg')]: {
        '& .Genius-text': {
            fontSize: "50px",
        },
        '& .port-card-2': {
            height: "618px",
        },


    },

    //  md down started

    [theme.breakpoints.down('md')]: {
        '& .Genius-text': {
            fontSize: "40px",
        },
        '& .nav-list-bg-rounded': {
            background: "unset",
            border: "unset",
            borderRadius: "unset",
        },


    },

    //  sm down started

    [theme.breakpoints.down('sm')]: {

        '& .Appbar-setting': {
            '& .MuiListItem-root': {
                paddingLeft: "unset",
                paddingRight: "unset",
            },
        },
        '& .portfolio-text': {
            fontSize: "36px",
        },
        '& .meme': {
            fontSize: "14px",
        },
        '& .Revolution': {
            fontSize: "21px",
            lineHeight: "36px",
            padding: " 23px 0px",

        },
        '& .thesis': {
            fontSize: "36px",
            lineHeight: "50px",
            hover: {
                color: "#8D8A93",
            }
        },
        '& .colapsebtn': {
            '& svg': {
                right: "11px",
            },
        },
        '& .emailmob': {
            marginTop: "60px",
        },
        '& .copy-text': {
            textAlign: "center",
            marginTop: "80px",
        },
        '& .logo-2': {
            height: "auto",
            width: "91%",
            marginTop: "10px",
        },
        '& .aplybtn': {
            width: "116px",
            fontSize: "12px",

        },
        '& .Genius-text': {
            marginTop: "200px",

        },


    },


}));