<?php
//ヘッダー部分（<head></head>内）にタグを挿入したいときは、このテンプレートに挿入（ヘッダーに挿入する解析タグなど）
//子テーマのカスタマイズ部分を最小限に抑えたい場合に有効なテンプレートとなります。
//例：<script type="text/javascript">解析コード</script>
?>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script>
    // MathJaxの設定
    MathJax = {
        tex: {
                tags:'all'
        }
    };
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<!-- <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> -->


<?php if (!is_user_administrator()) :
//管理者を除外してカウントする場合は以下に挿入 ?>

<?php endif; ?>
<?php //全ての訪問者をカウントする場合は以下に挿入 ?>
