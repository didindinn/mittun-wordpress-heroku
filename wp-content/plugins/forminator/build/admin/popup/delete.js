!function(e){formintorjs.define(["text!tpl/dashboard.html"],function(t){return Backbone.View.extend({className:"wpmudev-section--popup",popupTpl:Forminator.Utils.template(e(t).find("#forminator-delete-popup-tpl").html()),initialize:function(e){this.nonce=e.nonce,this.id=e.id,this.referrer=e.referrer,this.content=e.content||Forminator.l10n.popup.cannot_be_reverted},render:function(){this.$el.html(this.popupTpl({nonce:this.nonce,id:this.id,referrer:this.referrer,content:this.content}))}})})}(jQuery);