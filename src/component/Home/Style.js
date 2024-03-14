import { styled } from '@mui/material/styles';

export const HomeStyle = styled('div')(({ theme }) => ({
    '& .Appbar-setting': {
        background: "transparent",
        boxShadow: "none",
        borderRadius: "30px",

        '& .MuiList-root': {
            display: "inline-flex",
        },
        '& .MuiListItem-root': {
            paddingLeft: "5px !important",
            paddingRight: "5px !important",
        },
        '& .navButton': {
            height: "48px",
            width: "48px",
            cursor: "pointer",
            background: "rgba(22, 22, 22, 0.6)",
            borderRadius: "50%",
            '&:hover': {
                background: 'linear-gradient(to right, #5227ff, #5c00ff)',
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out',
                color: '#fff'
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
        background: "rgba(22, 22, 22, 0.9)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "100px",
        height: "58px",
        padding: "12px 32px 12px 24px",
        gap: "0px",
    },


    '& .logo': {
        width: "34px",
        height: "34px",
    },
    "& .MuiButton-containedPrimary": {
        cursor: 'pointer',
        background: 'linear-gradient(96.34deg, rgba(82, 39, 255, 0.8) 0%, rgba(97, 0, 255, 0.8) 100%)' + ' ,radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.256) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        boxShadow: 'inset 0px -2px 2px rgba(0, 0, 0, 0.25)' + ' inset 0px 1px 2px rgba(255, 255, 255, 0.4)',
        borderRadius: ' 32px',
        backdropFilter: ' blur(16px)',
        fontFamily: "PlusJakartaSans-Bold",
    },
    '& .aplybtn': {
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "PlusJakartaSans-Bold",

        width: "134px",
        height: "48px",
        '&:hover': {
            background: 'linear-gradient(to right, #5227ff, #5c00ff)',
            transform: 'scale(1.02)',
            transition: 'transform 0.3s ease-in-out',
            color: '#fff'
        },
        '& img': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1, /* Places the SVG behind the button text */
        }
    },


    '& .nav-btn': {
        color: "#B7B5BA !important",
        fontSize: "16px",
        fontFamily: "PlusJakartaSans-Bold",
        textTransform: "capitalize",
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out'
        },
    },
    '& .mob-draw': {
        '& .MuiList-root': {
            display: "inline-block !important",
        },

        '& .MuiListItemButton-root': {
            color: "#B7B5BA !important",
        },
    },

    '& .Blockhub-text': {
        //color: "#FFFFFF !important",
        //fontSize: "16px",
        fontFamily: "Inter-Medium",
        textAlign: "center",
        lineHeight: "24px",
    },
    '& .geniusbtn': {
        position: 'relative',
        overflow: 'hidden',
        marginTop: "20px",
        marginBottom: "20px",
        width: "166px",
        height: "50px",
        '& img': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1, /* Places the SVG behind the button text */
        }
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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        width: "auto",
        maxWidth: "500px",
        height: "auto",
        maxHeight: "384px",
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "32px",
        flex: "none",
        order: "0",
        flexGrow: "1"
    },
    ".port-card:hover": {
        filter: "brightness(1.25)",
    },
    '& .news-card': {
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "32px",
        height: "529px",
    },
    ".news-card:hover": {
        filter: "brightness(1.25)",
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
        //background: 'linear-gradient(180deg, #060606 0%, #141414 100%);',
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
        letterSpacing: "-0.02em",
        flex: "none",
        order: 1,
        flexGrow: 0,
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
        "&:hover": {
            background: " radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
            border: " 1px solid rgba(255, 255, 255, 0.16)",
        },
        '& svg': {
            position: "absolute",
            right: "19px",
        },
    },

    '& .colapse-bg': {
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
        position: 'relative',
        overflow: 'hidden',

        '& img': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1, /* Places the SVG behind the button text */
        }
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
            //fontSize: "50px",
        },
        '& .news-card': {
            height: "618px",
        },


    },

    //  md down started

    [theme.breakpoints.down('md')]: {
        '& .Genius-text': {
            //fontSize: "40px",
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
        '& .nav-btn': {
            fontSize: '10px'
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
            width: "110px",
        },
        '& .geniusbtn': {
            position: 'relative',
            overflow: 'hidden',
            marginTop: "20px",
            marginBottom: "20px",
            width: "166px",
            height: "50px",
            '& img': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: -1, /* Places the SVG behind the button text */
            }
        },
        '& .Genius-text': {
            //marginTop: "200px",

        }
    }
}));

