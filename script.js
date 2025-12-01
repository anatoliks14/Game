const images = [
    /*ФАИС-СУ*/    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA1CAYAAADcdMIWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAIDSURBVGhD7Zq9ioNAFEa/3cYXEcIipLHzCQJbpNxuIZ2dTbDcIqWksUsXSLfdpgj4BHY2AQkBX8Rq946OiebH0eSyJDAHBo2JePxm5jpCXvI8/8WD8yq3D42W5EJL9iFyDRiGbE6ITB4XPIBkBJfExkv5UZD4sAwHoTRtl8xCONXdieZG8osrRO7xt6KdJHJOhtAZo/CzA6R5DiqJSAObDiTwP8vz+yW53Ssu2pNsg+9E7Eywjj2YxUHA9FYoPb+xoQu2S5oDDOVuQbJjltxRXmoUSZp4E3d0YIs9o2X0Uw3EJWbVABREc/iF/RADilcpOWhGCX+uGJddofE+q02WxLeOY1nOIjuYYkRb5ZgcTQM0wlzODrPuHqK539rVk3WO2CtHqXrimO/4aFhSmpZLheMOqAo0Sg7FEKTlzK7aQkQoUUtSl3urkzRpDI2V5eUKokw1DSm2L8jQLtJBkjA9rIqaUKMouD0TvSQoyk89tgt0kyQOtasBJdqlaFcPhTNB0c2LYnK00XPRK54QliwP9yIE49ZurrhpZZ6FDqy7TKmLc3WCFZ27u47pxTQD13Sp/thBSud2FxSwvOOok+2X3Cm8L2Kns1esbGoLh1u5qbv/Gy3JhZbkQktyoSW50JJcaEkutCQXWpILLcmFluRCS3KhJbnQklxoSS6eQvIJ/oMB/AGW5bAyJiHMwgAAAABJRU5ErkJggg==",
    /*ВОЗ*/    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAA2CAYAAACr6+s1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALOSURBVGhD7ZkxjqswEIbnvSYXSbM1XU5Axw2Q3KWjQSlTpEQ0dHRI3ICOS6RcbcNFUuUN4IjEHpMZm2KflE9C69Vust9i++e38ud2u93hF/JXf/11fMSkfMSk/GdiQwWH3Q52j+tQwaB/tMbQ97zfqw7Le+N1qOxXbXfH8J9JkwRS4o/4sJHYAFV6giuOrqcUtnDbRqwv4TRaTVzhVPZ67M8GYj0ck0aPNU0Cx0C3YLH+mIChNdEkR1T2J0wMF/yFsppo4BKw2ALElgXvImQjeIsNVfq04GcipSDS4xncCCkvA008xXooLasC2rqGtnhVw9sGPpvUS8xe8BEUbQZ7HO2zFkw3n40gF+uPYKZDVLSQjVYTe8jawpjSBhJhfgjFiMwap3CxmtlncFZ6/ECYbSKxobpYmaXO8xSaxHUHltuFvxH4YuND2lzwqoM61mOLGOrOUMONwH3IM8V+oLQyS0HntpqJa7DdUih/9DdrjMc36/ou7rh4x2Od81Id8Try6u7oRr7H44qKb+t18l05ggs+f3OzFmLIzfxg4CG2ZBYXKtveIRZ7zSwuVLatIxOjMosLZpv1uFpBJObKLC777Gxlmwu+2GpmcSGyzQFfrLlscMjADuduli8IptK/Wz2gOpwL2eL37FYzRIdbQSaG+B4yXIcWF2Ixn25Fdbh3eIghom5FdDgGPLFIgTKykTulVA1X5psRMO/YF+R2JX1/bqTOneoM+Zcer8CfSke3crtR505Gh9OI1phdl93ZRmWW6mrMfh7CxU90K6ouUzVc1OHEYnS3up7Kl43Ql+YUyjucWIzuVk/Z9vbcycNDDKG61ZRtzHMnAz8xhOpWTWI/dnw7nLcYq1sFdLgAMYTItgV+ZlGEiSFxTh8yoiJnZxZFsBi5EUIOLZpwMeQ12+SZRbGJ2JRtj4c8PqQDb9bERmLItBHCFvwzn8/EZQD8AzXscZ6GOSE2AAAAAElFTkSuQmCC",
    /*ЭЛЬ*/    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA5CAYAAAC1fzLeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALNSURBVGhD7Zk/a+swEMCvb+kXMYQS6OItn6CQId0ye8vWLWOHjt6yZQu8rVs8FPwJunkJmBDwF/Hkp2vt1n900p2kIfDygyN2UMxPsnU6OXd1XTdwpfxpP6+Sm5wrNzlX/he5CnaLDeTtWQgCyaHYHLbFAVb34QQDyHVi7SmEE/SUG4t1oOACdlV76oiHHCXWUcB27ifoKGcT6/ATdJDjinW4CwrlpGIdboKCkslVrE8CWb2Hp/bMBnvk8o2vGKJm8WKnusmDJ5dvYHVoj/vEKZR1DXWZQtx+ZaXYwnzDzIJ4W82RNQkA3vpeJE02aFM2aTxuY44k6/9eH1a5LBldOE4bNVrTtlkybGcL6jq9MMuVaaNuF/+CQkHb6BnlyjTuXSxu0lLfbhDjDpnC0lmD3OhZSzJNGyIEgqbRo2drflQT/5fkmZudFNELfNaZymp2Dkd65pJy+bGvFsND1B6yeYI9R/B0IfMeIVfB5dQefvEIM7EcwhAs3uGDsCPlzt6rQYdNsICzSK66wGDg1NlFuGgPYd7iEfSEGED3jo8SJJa5E9Fzppx5VrFRs/ivWue4sOXg8Oa9J0Ci5ZpdJPDlvgrGALuqaAnrkd0jkQr0ctFMJQ8dsnrMF2LkInigxh7rsaCCdIIn5Wb6ofsmqCCd4MlnLiKHrsVZcJTgk2eVZPTQcpxZ5SBY7d4GBUVsWLRJOd2s0iISrODjvT9sMayXhkVbV0f9hKiyHe8rpjEsXlVYakTLHkK6caEFJ2KMytoip0JSdmNoSu/JJgmDUVnb5VRMe22OrvSmf2d/BDCYryNCvIr4RcnDnlH1C96V5LC5Xw3SgAtcMYROJRPcCsY+EjFEIIegYAmCkuwHqRgilEMiePmUCbqIIQ5yCF/QVQxxlEPsgj5iiIccQgv6iiGecshUMIQYEvBv9O9EfX4NI4bc/uN35SbnyhXLAfwDLqGn153z3hMAAAAASUVORK5CYII=",
    /*ХЕБО*/    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAA2CAYAAABNwiBxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFGSURBVFhH7Zk9joMwEEZnt+FA7vYE6fYM7nwWd+nS7RnccRF3uQiV1xOsABGf/6CgmCc9JYQJPCUIkPiapinQRfhOr5dAYhASg5AYRDFmNIbG9D7LaGgYBhp+7vRMH2GedDc7c3zSQ3qr+IQY1cHtrH/rbVCvuVll/f7cSx+sSrPabdbhGKffG5/NBH3OfuxkcRWSXIeDGBf06guLKGi9ExWsL81s1W6eyfxNrUF5nd7b1hLCZo+Zs4JqQthCDHssqDaErYhh+4JaQtjKGLYtqDWEbYhh64J6QtjGGDYf1BvCdt52jmSGX/pLSyViCD1uaSFD54XyRo/JUfyFitSGMAeu2uWglhDm4C0EDmoNYU64n4lB8ajdoF1zCHNCzHlIDEJiEBKDkBiExCAkBiExCIlBSAxCYhASg5AYhMQgJAZxoQemRP/aQC4HOzFu1gAAAABJRU5ErkJggg==",
    /*КИЙГ*/   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAYAAACm9ZtyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAICSURBVFhH7ZkxjsIwEEVnt9kD5RJ0nMEdB0AcgNKiodsuV9h0XIIyHRdJ5bWFLRx7bM8M2VAsI32RiMR5/4c4HvExTZOBF9an/3xZvQHeAC8HAPcY3jUYBeAeyVWkhvt1I4DJjLpDD15cnTajv+YMYK0UgnsEYIUUIvdOGQCWQqfH5BiiRm26ZKzYvRMCgKXQGT3mx9U1Gt3FY1gl7p1QAPRkNSDHVTSo+fkFEwUAK+IAuOgGygDPpMCArwBYiVLggdcBJCkwoRsAVqwB+cBtAM6ggltGALAiDSz70dIAsMGTSUU6eREBrLIU4mlVPn3TASop5O6VGbLzcTEArNCXy3MvL3Zjctl9wbb3O2gpGKZv2Pi9VrHXhJu9BptCsTq9J1/clag1K6fAc+9KtCoupcB170rcnOYp8N27kvUFtzMcs1vQw8/FbzJKBHA5HeDqt+Pqj2e4+W1q8QFQ976uBzgxU2ADlNyH6rc74DDwABD3SqdPRA/HM+NGhCmRokHNp9x13wXVJmOFt2HJffhemgINgNBiSVMgAbTcB0lSaAOQ3AfxU2gAtNeCqbgp1AGq68CS8hSEnRHffVCeQnmFXAYQNBkP0XuEAgB9gKKIBnCAp9wH0UwgAAu4DyIYyQGQX/6iSswkAIj7xTVPYQ7w1+6DohQigDXcBz1S+O//GQH8ApAbTpjsa3YsAAAAAElFTkSuQmCC",
	
	];

    const cards = [...images, ...images]; // Дублируем массив для пар  
    cards.sort(() => Math.random() - 0.5); // Перемешиваем карты

    const grid = document.getElementById('grid');
    let firstCard, secondCard;
    let lockBoard = false;

    function createCard(image) {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = image;
        card.appendChild(img);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }

    function flipCard() {
        if (lockBoard || this === firstCard) return;
        this.classList.add('flipped');

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        lockBoard = true;
        const isMatch = firstCard.querySelector('img').src === secondCard.querySelector('img').src;

        if (isMatch) {
            resetBoard();
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                resetBoard();
            }, 1000);
        }
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    cards.forEach(createCard);
