				$(document).ready(function(){
					jQuery('.cl_trt').click(function(){
						var re=$(this).attr('rel2');
						$('.cll'+re).show();
						//jQuery('.cl_delll').show();
						//jQuery('.cl_edittt').show();
						
					});
					jQuery('.cl_delll').click(function(){
						urlid=0;
						jQuery('.cl_trt').each(function()
						{
							if($(this).is(':checked'))
							{
								urlid=urlid+','+$(this).attr('rel');
							}
						});
						if(urlid!=0)
						{
							location.href='/?admin=delete_order_com&id='+urlid;
						}
						
					});
					jQuery('.cl_edittt').click(function(){
						urlid=0;
						jQuery('.cl_trt').each(function()
						{
							if($(this).is(':checked'))
							{
								urlid=urlid+','+$(this).attr('rel');
							}
						});
						if(urlid!=0)
						{
							location.href='/?admin=sup_group&id='+urlid;
						}
						
					});
			
					jQuery('.c2_degroup').click(function(){
						urlid=0;
						jQuery('.c2_trt').each(function()
						{
							if($(this).is(':checked'))
							{
								urlid=urlid+','+$(this).attr('rel');
							}
						});
						if(urlid!=0)
						{
							location.href='/?admin=degroup&id='+urlid;
						}
		
					});
					jQuery('.c2_status').click(function(){
						urlid=0;
						jQuery('.select_status option').each(function()
						{
							if($(this).is(':selected'))
							{
								urlid=urlid+','+$(this).attr('rel');
							}
						});
						if(urlid!=0)
						{
							location.href='/?admin=add_status_com&id='+urlid;
						}
						
					});
					$('.change_tab_cup').change(function(){
							var rel=$(this).attr('rel');
							var cup=$(this).val();
							var skid=$("#getSki"+rel+" option:selected").attr('rel-skidki');
							var vall=parseFloat($(this).find('option:selected').attr('rel-val'));
							var nameCur=$(this).find('option:selected').attr('rel-name-cur');
							var sumPrice=0;
							$('.open_commodity'+rel+' .tab_brenda tr').each(function(i){
								if(i!=0){
									var getCount=parseInt($(this).find('td').eq(6).text());
									var real=parseInt($(this).find('td').eq(7).attr('rel-real-price'));

									// alert(getCount+" "+real);
									
									$(this).find('td').eq(7).text(nameCur);
									if(cup==3 || cup==2){
										var addd=parseInt(real*vall);
									}else{
										var addd=real*vall;
									}
								
									$(this).find('td').eq(8).text(addd);
									$(this).find('td').eq(10).text(addd*getCount);

									if(skid==0){
										$(this).find('td').eq(9).text(addd);
										$(this).find('td').eq(11).text(addd*getCount);
										sumPrice+=addd*getCount;
									}else{
										$(this).find('td').eq(9).text(addd-(addd/100*skid));
										$(this).find('td').eq(11).text(addd*getCount-(addd*getCount)/100*skid);
										sumPrice+=addd*getCount-(addd*getCount)/100*skid;
									}
									
								}
							});
							sumPrice=sumPrice.toFixed(2);
							$('#gh'+rel+' #addPrice').text(sumPrice+' '+nameCur);
						});

					$('.wind_o2').click(function(){
							//$('body').css({'overflow':'hidden'});
							var rel=$(this).attr('rel');
						//	alert(rel);
							//$('#open_win'+rel).slideToggle();
							
							if($(this).hasClass('open_backg')){
								$('#open_win2'+rel).show();
								$('#open_win2'+rel).animate({'max-height':'260px'}, 600);
								
								$(this).removeClass('open_backg');
								$(this).addClass('close_backg');
								$('.iiw'+rel).removeClass('icon_info_white');
								$('.iiw'+rel).addClass('icon_info_blue');
								$('.bbc'+rel).removeClass('block_down');
								$('.bbc'+rel).addClass('block_up2');

								addNoteDate(rel);
							}else{
								//$('#open_win2'+rel).slideUp();
								$('#open_win2'+rel).animate({'max-height':'0px'}, 400, function(){
									$('#open_win2'+rel).hide();
								});
								$(this).addClass('open_backg');
								$(this).removeClass('close_backg');
								$('.iiw'+rel).removeClass('icon_info_blue');
								$('.iiw'+rel).addClass('icon_info_white');
								$('.bbc'+rel).addClass('block_down');
								$('.bbc'+rel).removeClass('block_up2');
							}
						});
						$('.wind_o2_orange').click(function(){
							var rel=$(this).attr('rel');

							if($(this).hasClass('open_backg')){
								// $('#open_win2'+rel).slideDown();
								$('#open_win2'+rel).show();
								$('#open_win2'+rel).animate({'max-height':'260px'}, 600);

								$(this).removeClass('open_backg');
								$(this).addClass('close_backg');
								$('.iiw'+rel).removeClass('icon_info_orange');
								$('.iiw'+rel).addClass('icon_info_blue');
								$('.bbc'+rel).removeClass('block_down1_orange');
								$('.bbc'+rel).addClass('block_up2');

								addNoteDate(rel);
							}else{
								// $('#open_win2'+rel).slideUp();
								$('#open_win2'+rel).animate({'max-height':'0px'}, 400, function(){
									$('#open_win2'+rel).hide();
								});
								$(this).addClass('open_backg');
								$(this).removeClass('close_backg');
								$('.iiw'+rel).removeClass('icon_info_blue');
								$('.iiw'+rel).addClass('icon_info_orange');
								$('.bbc'+rel).addClass('block_down1_orange');
								$('.bbc'+rel).removeClass('block_up2');
							}
						});
						$('.wind_o2_red').click(function(){
							var rel=$(this).attr('rel');

							if($(this).hasClass('open_backg')){
								// $('#open_win2'+rel).slideDown();
								$('#open_win2'+rel).show();
								$('#open_win2'+rel).animate({'max-height':'260px'}, 600);

								$(this).removeClass('open_backg');
								$(this).addClass('close_backg');
								$('.iiw'+rel).removeClass('icon_info_red');
								$('.iiw'+rel).addClass('icon_info_blue');
								$('.bbc'+rel).removeClass('block_down1_red');
								$('.bbc'+rel).addClass('block_up2');

								addNoteDate(rel);
							}else{
								// $('#open_win2'+rel).slideUp();
								$('#open_win2'+rel).animate({'max-height':'0px'}, 400, function(){
									$('#open_win2'+rel).hide();
								});
								$(this).addClass('open_backg');
								$(this).removeClass('close_backg');
								$('.iiw'+rel).removeClass('icon_info_blue');
								$('.iiw'+rel).addClass('icon_info_red');
								$('.bbc'+rel).addClass('block_down1_red');
								$('.bbc'+rel).removeClass('block_up2');
							}
						});
						$(".noteImportant").click(function(){
							var rel=$(this).attr("rel");
							var box=0;
							if($(this).prop("checked")){
								box=1;
							}

							$.ajax({
								type:'post',
								url:'/modules/commodities/ajax/ajax_write.php',
								data:{rel:rel, txt:box, wr_name:'write_payment_important'},
							});
						});
					$('.write_tab').click(function(){
						$(this).attr('contenteditable',true);
					});
					$('.write_tab').keyup(function(){
						var rel=$(this).attr('rel');
						var txt=$(this).html();
						$("#gh"+rel+" .write_tab").removeClass("flag")
						$.ajax({
							type:'post',
							url:'/modules/commodities/ajax/ajax_write.php',
							data:{rel:rel, txt:txt, wr_name:'write_payment'},
						}); //.done(function(d){alert(d);});
					});
					function addNoteDate(rel){
						// alert(rel);
						var write=$("#gh"+rel+" .write_tab");
						var txt="";
						var today=new Date();
						var hour=today.getHours();
						var minut=today.getMinutes();
						var da=today.getDate();
						var mount=today.getMonth()+1;
						if(mount<10){
							mount="0"+mount;
						}
						if(minut<10){
							minut="0"+minut;
						}
						var day=today.getDay();
						switch(day){
							case 1:
								day="Пн";
							break;
							case 2:
								day="Вт";
							break;
							case 3:
								day="Ср";
							break;
							case 4:
								day="Чт";
							break;
							case 5:
								day="Пт";
							break;
							case 6:
								day="Сб";
							break;
							case 0:
								day="Вс";
							break;
						}
						var now = day+" "+da+"."+mount+" "+hour+":"+minut;
						// alert(now);
						if(write.text()==""){
							txt="<span class='colorDateNote'>"+now+" - </span><span class='colorTextNote'> Text </span>";
							write.removeClass("flag")
						}else{
							txt="<br/><br/><span class='colorDateNote'>"+now+" - </span><span class='colorTextNote'> Text </span>";
						}

						if(!write.hasClass("flag")){
							write.append(txt);
							write.addClass("flag");

							var htm=write.html();
							htm=htm.replace(/div><br><br>/gi, "div><br>");
							write.html(htm);
						}
					}

					$(".forClient").change(function(){
						var rel=$(this).attr("rel");
						var rel_client=$(this).attr("rel-client");
						var relGroup=$(this).attr("rel-group");
						$.ajax({
							method:"GET",
							url:'http://'+window.location.hostname+'/modules/commodities/admin/auto_status_client.php',
							data:{rel:rel,rel_client:rel_client}
						});
						//$(".auto_set"+rel+' option[value="2"]').attr("selected", "selected");

						$(".auto_set"+relGroup+' option').removeAttr("selected");
						$(".auto_set"+relGroup+' option').eq(1).attr("selected", true)
						$(".auto_set"+relGroup).css({"background" : "rgb(255, 204, 0)"});
					});
					$(".changeCommodity").click(function(){
						var rel=$(this).attr("rel");
						var relGroup=$(this).attr("rel-group");
						var vall=$(this).val();
						if(vall==3){
							var count=$("#"+rel+" td").eq(5).text();
							var price=$("#"+rel+" td").eq(7).text();
							var summ=$("#"+rel+" td").eq(8).text();

							var getCount=$("#gr_set_count"+relGroup).text();
							var getSumm=$("#gr_set_summ"+relGroup).text();

							$.ajax({
								method:"GET",
								url:'http://'+window.location.hostname+'/modules/commodities/ajax/changeSelect.php',
								data:{rel:rel, count:0, price:0 }
							});

							$("#gr_set_count"+relGroup).text(getCount-count);
							$("#gr_set_summ"+relGroup).text(getSumm-summ);
							
							$("#"+rel+" td").eq(5).text(0);
							$("#"+rel+" td").eq(7).text(0);
							$("#"+rel+" td").eq(8).text(0);
						}
					});
//------------------------------------------------------------------------------------------------------
					$('.all_change').click(function(){
						var rel=$(this).attr('rel');
						
						if($(this).prop('checked')){
							$('#but22_tab'+rel+' .c2_trt').each(function(){
								$(this).prop('checked',true);
							});
						}else{
							$('#but22_tab'+rel+' .c2_trt').each(function(){
								$(this).prop('checked',false);
							});
						}
					});
					$('.change_price_opt').change(function(){
						var rel=$(this).attr('rel');
						var vall=$(this).val();
						var cur=$(this).attr('rel-cur');

						var skidka=parseFloat($('#getSki'+rel+' option:selected').attr('rel-skidki'));



						if(vall==1 || vall==2){
							$('body').css({'cursor':'wait'});
							$('#but22_tab'+rel+' .c2_trt:checked').each(function(){
								var rell=$(this).attr('rel');
								var relId=$(this).attr('rel-id');
								$.ajax({
									method:'GET',
									url:'http://'+window.location.hostname+'/modules/commodities/ajax/change_price_opt.php',
									data:{comid:relId, cliid:rell, change:vall, curid:cur, status:1 },
									dataType:'json'
								})
								.done(function(data){
									//alert(data['price']);
									$('body').css({'cursor':'default'});
									var count=parseInt($('#'+rell+' td').eq(6).text());

									var ckiSum=data['price']-data['price']/100*skidka;

									$('#'+rell+' td').eq(8).text(data['price']);
									$('#'+rell+' td').eq(9).text(ckiSum.toFixed(2));
									$('#'+rell+' td').eq(10).text(data['price']*count);
									$('#'+rell+' td').eq(11).text((ckiSum.toFixed(2))*count);
								});
								//alert(rell+'='+relId);
							});
						}
					});

					$('.open_cont').click(function(){
						var rel=$(this).attr('rel');
						if($(this).hasClass('bu1')){
							close_win();
							
							var wp=$('.tab').height();
							var wo='';
							var tin=$('#ow1_'+rel+' .tin');	
							
							$('#ow1_'+rel).css({'z-index':'50'});
							$('#window_cont'+rel).animate({'max-height': '550px', 'height':'none'}, 200, function(){
								$('#bo1_'+rel).removeClass('block_down1');
								$('#bo1_'+rel).addClass('block_up1');
								
								var wh=$('#ow1_'+rel).height();
								tin.fadeIn('5000');
								tin.css({'margin-top': (wp-3)+'px', 'height':(wh-wp+3)+'px'});
								
							});
							
							$(this).removeClass('bu1');
							$(this).addClass('bu2');
						}else{
							$('#window_cont'+rel).animate({'max-height': '80px', 'height':'83px'}, 300, function(){
								$('#ow1_'+rel).css({'z-index':'0', 'box-shadow': '0px 0px 0px'});
								$('#bo1_'+rel).removeClass('block_up1');
								$('#bo1_'+rel).addClass('block_down1');
							});
							$(this).removeClass('bu2');
							$(this).addClass('bu1');
							tin.fadeOut();
						}
					});
					$('.open_us').click(function(){
						var rel=$(this).attr('rel');
						
						
						var wp=$('.tab').height();
						var wo='';
						var tin=$('#ow2_'+rel+' .tin');	
										
						
						
						if($(this).hasClass('bu1')){
							close_win();
							$('#ow2_'+rel).css({'z-index':'50'});
							$('#window_us'+rel).animate({'max-height': '550px'},{duration: 1000, step:function(){
								$('#bo2_'+rel).removeClass('block_down1');
								$('#bo2_'+rel).addClass('block_up1');
								
								var wh=$('#ow2_'+rel).height();
								tin.fadeIn('1000');
								tin.css({'margin-top': (wp-3)+'px', 'height':(wh-wp+3)+'px'});
								
							}});
							
							$(this).removeClass('bu1');
							$(this).addClass('bu2');
						
						}else{
							$('#window_us'+rel).animate({'max-height': '80px'}, 300, function(){
								$('#ow2_'+rel).css({'z-index':'0', 'box-shadow': '0px 0px 0px'});

								$('#bo2_'+rel).removeClass('block_up1');
								$('#bo2_'+rel).addClass('block_down1');
							});
							$(this).removeClass('bu2');
							$(this).addClass('bu1');

							tin.fadeOut();
						}
						
						//$('.rees').text('wp:'+wp+', wo:'+wo);
					});
					$('.open_rez').click(function(){
						var rel=$(this).attr('rel');
						
						var wp=$('.tab').height();
						var wo='';
						var tin=$('#ow3_'+rel+' .tin');							
						
						if($(this).hasClass('bu1')){
							close_win();
							$('#ow3_'+rel).css({'z-index':'50'});
							$('#window_rez'+rel).animate({'max-height': '300px'},{duration: 1000, step: function(){
								$('#bo3_'+rel).removeClass('block_down1');
								$('#bo3_'+rel).addClass('block_up1');
								
								var wh=$('#ow3_'+rel).height();
								tin.fadeIn('5000');
								tin.css({'margin-top': (wp-3)+'px', 'height':(wh-wp+3)+'px'});
							}});
							
							$(this).removeClass('bu1');
							$(this).addClass('bu2');
						}else{
							$('#window_rez'+rel).animate({'max-height': '80px'}, 300, function(){
								$('#bo3_'+rel).removeClass('block_up1');
								$('#bo3_'+rel).addClass('block_down1');
								$('#ow3_'+rel).css({'z-index':'0', 'box-shadow': '0px 0px 0px'});
							});
							$(this).removeClass('bu2');
							$(this).addClass('bu1');
							tin.fadeOut();
						}
					});
					$('.but_open_win').click(function(){
						var rel=$(this).attr('rel');

						if($('#gh'+rel).hasClass('tab_up')){
							$('.open_commodity'+rel).slideDown(function(){
								$('#bb'+rel).removeClass('block_down');
								$('#bb'+rel).addClass('block_up');
							});
							$('#gh'+rel).removeClass('tab_up');
							$('#gh'+rel).addClass('tab_down');

						}else{
							$('.open_commodity'+rel).slideUp(200, function(){
								$('#gh'+rel).removeClass('tab_down');
								$('#gh'+rel).addClass('tab_up');
								$('#bb'+rel).removeClass('block_up');
								$('#bb'+rel).addClass('block_down');
							});
						}
					});
					$('.select_open').click(function(){
						var rel=$(this).attr('rel');

					//	$('.scc'+rel).toggle();

						$('.sc'+rel).toggle();

						if($(this).hasClass('select_open_line')){
							$(this).removeClass('select_open_line');
						}else{
							$(this).addClass('select_open_line');
						}
					});
					$('.select_change li').click(function(){

						var rel=$(this).attr('rel');
						var rel2=$(this).attr('rel2');
						var a='';
						$('.bb'+rel2).each(function(){
							if($(this).is(':checked')){
								var rr=$(this).attr('rel');
								$('.ssc'+rr).val(rel);	

								var data = {};
						        data['id'] = rel;
						        
						        data['comid'] = rr;
						        data['status'] = 'admin';
						        $.ajax({
						        	url: 'http://'+window.location.hostname+'/modules/commodities/admin/add_status_com.php',
						        	method:'GET',
						        	data: data,
						            success: function(data){
						            	// alert(data);
						            },
						        	error: function(data){
						                return(false);
						            }
						        });
							}
						});
						
						$('.select_change').hide();
						$('.select_open').removeClass('select_open_line');
					});
					$('.add_commodity').click(function(){
						var rel_gr=$(this).attr('rel');
						var rel_com=$(this).attr('rel_com');

						$('.bb'+rel_com).each(function(){
							if($(this).is(':checked')){
								var dddd='<tr class = \'group_td gr_tab\' id=\'\' rel=\'shop_orders_coms\' rel2=\'id\'>';
								//alert($(this).attr('rel'));
								var rrr=$(this).attr('rel');
								var data = {};
						        data['gr'] = rel_gr;
						        data['comid'] = rrr;
						        data['update_group'] = 'true';
						        $.ajax({
						        	url: 'http://'+window.location.hostname+'/modules/commodities/ajax/add_group.php',
						        	method:'GET',
						        	data: data,
						            success: function(data){
						            	// alert(data);
						            },
						        	error: function(data){
						                return(false);
						            }
						        });

						        $('#get_com_cols'+rrr+' .tab_td2').each(function(){
						        	if($(this).find('.ssc'+rrr)){
						        		dddd+='<td>'+$(this).html()+'</td>';
						        	}else{
						        		dddd+='<td>'+$(this).text()+'</td>';
						        	}
						        	
						        });
								$('#get_com_cols'+rrr).remove();

								$('.open_commodity'+rel_gr+' table').append(dddd+'</tr>');
							}
							$('.cll'+rel_com).hide();

							var gr_set_count=0;
							$('#but22_tab'+rel_gr+' td:nth-child(6)').each(function(){
								gr_set_count+=parseInt($(this).text());
							});
							$('#gr_set_count'+rel_gr).text(gr_set_count);

							var gr_set_sum=0;
							$('#but22_tab'+rel_gr+' td:nth-child(9)').each(function(){
								gr_set_sum+=parseInt($(this).text());
							});
							$('#gr_set_summ'+rel_gr).text(gr_set_sum);

						});

						
						//$(location).attr('href','http://'+window.location.hostname+'/?admin=orders_brands20');
					});
					
					//---Send mail order----------

					$('.send_mail').click(function(){
						$('body').css({'overflow':'hidden'});

						var rel=$(this).attr('rel');
						var rel2=$(this).attr('rel2');
						
						$('.sent_order').attr('rel',rel);	

						var getOpt=$('#getSkidkaOpt'+rel2).text();
						getOpt=parseInt(getOpt.replace('%', ''));					
						var getRoz=$('#getSkidkaRoz'+rel2).text();					
						getRoz=parseInt(getRoz.replace('%', ''));

						var getOtOpt=$("#getOtgruzOpt"+rel2).text();
						getOtOpt=parseInt(getOtOpt.replace("мин/ед",""));
						if(getOtOpt==0){
							getOtOpt=1;
						}
						var getOtRoz=$("#getOtgruzRoz"+rel2).text();
						getOtRoz=parseInt(getOtRoz.replace("мин/ед",""));
						if(getOtRoz==0){
							getOtRoz=1;
						}

						var getCount=parseInt($("#gr_set_count"+rel).text());

						var comisia=0;
						if($("#but22_tab"+rel+" .change_price_opt").hasClass('comisia')){
							comisia=1;
						}


						var t = new Date();
						var tt=t.getDate()+'.'+(t.getMonth()+1)+'.'+t.getFullYear();
						var ti=t.getHours()+':'+t.getMinutes()+':'+t.getSeconds();

						$('.tab_send_subject').val('Заказ от MakeWear №'+rel+' от '+tt);

						$.ajax({
							method:'GET',
							url: 'http://'+window.location.hostname+'/modules/commodities/ajax/ajax_send.php',
							data: {id:rel2}
						})
						.done(function(data){
							
							$('.tab_send_towhere').val(data);
							$('.send_body').show();
						});

						var arr_p=[];
						$('.open_commodity'+rel+' table .c2_trt').each(function(){
							arr_p.push($(this).attr('rel'));
						});

						var tab='<div style=\'display:table;border-collapse: collapse;width: 100%;\'>';
							tab+='<div style=\'display:table-row\'>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Товар</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Артикул</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Название</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Цвет</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Размер</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Кол-во</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Валюта</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Цена</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Сумма</div>';
							tab+='<div style=\'display:table-cell;border:1px solid;text-align:center;vertical-align:middle;padding:7px;font-weight: bold;\'>Ссылка на товар</div>';
							tab+='</div>';
						
						var l=$('#but22_tab'+rel+' .gr_tab').length;
						var count=0;
						var price=0;
							$('#but22_tab'+rel+' .gr_tab').each(function(){
								var tabCount=parseInt($(this).find('td:eq(6)').text());
								var tabPrice=parseInt($(this).find('td:eq(8)').text());
								var PriceOrOpt=parseInt($(this).find('td:eq(10)').attr("rel-opt-roz"));
								var status=$(this).find('td:eq(16) select option:selected').val();

								if(rel2==47){
									tabPrice=parseInt($(this).find('td:eq(8)').attr('rel-price-opt'));
									PriceOrOpt=2;
								}

								if(status!=2){
								if(comisia!=1){
									if(PriceOrOpt==1){
										if(getOtRoz<=getCount){
											tabPrice=tabPrice-(tabPrice/100*getRoz);
										}
									}

									if(PriceOrOpt==2){
										if(getOtOpt<=getCount){ 
											tabPrice=tabPrice-(tabPrice/100*getOpt);
										}
									}
								}
									tabPrice=tabPrice.toFixed(0);
									var tabSumm=tabPrice*tabCount;

									if(comisia==1){
										tabSumm+=tabSumm/100*0.5;
									}
									// tabSumm=tabSumm.toFixed(2);
									tab+='<div style=\'display:table-row\'>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+$(this).find('td:eq(1)').text()+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+$(this).find('td:eq(2)').text()+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+$(this).find('td:eq(3)').text()+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+$(this).find('td:eq(4)').text()+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+$(this).find('td:eq(5)').text()+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+tabCount+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+$(this).find('td:eq(7)').text()+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+tabPrice+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'>'+(tabSumm)+'</div>';
									tab+='<div style=\'display:table-cell;border:1px solid;vertical-align:middle;padding:7px;\'><a href='+$(this).attr('rel-url')+' >'+$(this).attr('rel-nameurl')+'</a></div>';
									count+=tabCount;
									price+=tabSumm;
									tab+='</div>';
								}
							});

							// if(comisia==1){
							// 	price+=price/100*0.5;
							// }
							price=price.toFixed(0);

							tab+='<div style=\'display:table-row;font-weight: bold;\'>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'>ИТОГО:</div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'></div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'></div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'></div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'></div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'>'+count+' ед</div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'></div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'></div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'>'+price+' '+$('#but22_tab'+rel).find('td:eq(7)').text()+'</div>';
							tab+='<div style=\'display:table-cell;text-align:center;vertical-align:middle;padding:7px;\'></div>';
							tab+='</div>';

							tab+='</div>';

						var txt='';
							txt+='<div style=\'margin: 13px;margin-left: 28px;margin-right: 28px;font-size: 13px;\'>';
							txt+='<div style="margin-bottom:10px;"><a href=\"http://www.makewear.com.ua/\" target=\"_blank\"><img src=\"http://makewear.com.ua/templates/shop/image/logo.png\" alt=\"makewear.com\" border=\"0\"></a></div>';
							txt+='<div style=\'font-size: 14px;\'><p style=\"margin-bottom: -10px;\"><b>Заказ №'+rel+'</b></p><br><p style=\"margin-bottom: -10px;\">Дата: '+tt+'</p><br/><p style=\"margin-bottom:7px;\">Время: '+ti+'</p></div>';
							txt+='<hr width=100% /><br>';
							txt+='Добрый день, пожалуйста, подтвердите наличие данных моделей:<br/><br/>';
							txt+=tab;
							txt+='<br/><br/><br/><hr width=100% /><br/>';
							txt+='<table id=\"footer\" width=\"950px\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-bottom:none;border-left:none;border-right:none;border-color:#000;border-collapse:collapse;margin:20px auto;padding:5px;\">';
							txt+='<tbody><tr><td><img id=\"footer-img\" src=\"http://makewear.com.ua/templates/shop/image/email/mw_logo.jpg\" alt=\"makewear.com\" style=\"margin: 10px;width: 100px;\"></td>';
							txt+='<td style=\'vertical-align: middle;\'><img class=\"footer-i\" src=\"http://makewear.com.ua/templates/shop/image/email/call_fot.png\" alt=\"phone\"></td>';
							txt+='<td>';
							txt+='<p style=\"color: #696969; font-size: 14px; margin: 10px 0;\"><font face=\"CenturyGothic\">+38 (099) 098-00-82</font></p>';
							txt+='<p style=\"color: #696969; font-size: 14px; margin: 10px 0;\"><font face=\"CenturyGothic\">+38 (098) 474-22-82</font></p>';
							txt+='<p class=\"footer-href\" style=\"color: #696969; font-size: 14px; margin: 10px 0; text-decoration: none;\"><font face=\"CenturyGothic\">info@makewear.com.ua</font></p></td>';
							txt+='<td style=\'vertical-align: middle;\'><img class=\"footer-i\" src=\"http://makewear.com.ua/templates/shop/image/email/time_fot.png\" alt=\"phone\"></td>';
							txt+='<td><p style=\"color: #696969; font-size: 14px; margin: 10px 0;\"><font face=\"CenturyGothic\">Пн-пт с 9:00 до 20:00</font></p>';
							txt+='<p style=\"color: #696969; font-size: 14px; margin: 10px 0;\"><font face=\"CenturyGothic\">Сб-вс с 10:00 до 18:00</font></p>';
							txt+='<p style=\"color: #696969; font-size: 14px; margin: 10px 0;\"><font face=\"CenturyGothic\">Доставка осуществляется <br>в режиме работы служб доставки</font></p></td>';
							txt+='<td style=\'vertical-align: middle;\'><img class=\"footer-i\" src=\"http://makewear.com.ua/templates/shop/image/email/info_fot.png\" alt=\"phone\"></td>';
							txt+='<td><p style=\"color: #696969; font-size: 14px; margin: 10px 0;\">';
							txt+='<font face=\"CenturyGothic\">';
							txt+='<a href=\"http://makewear.com.ua/\">www.makewear.com.ua</a></font></p>';
							txt+='<p style=\"color: #696969; font-size: 14px; margin: 10px 0;\">';
							txt+='<font face=\"CenturyGothic\">';
							txt+='<a class=\"footer-href\" href=\"http://makewear.com.ua/company/\" style=\"color: #696969; text-decoration: none;\">О компании</a></font></p>';
							txt+='<p style=\"color: #696969; font-size: 14px; margin: 10px 0;\">';
							txt+='<font face=\"CenturyGothic\">';
							txt+='<a class=\"footer-href\" href=\"http://makewear.com.ua/oplata_dostavka/\" style=\"color: #696969; text-decoration: none;\">Оплата доставка</a>';
							txt+='</font></p></td></tr></tbody></table>';

						$('.sent_html').html(txt);

						if($(this).find("div").hasClass("icon_sent")){
							var wasSent=$(this).find(".icon_sent").attr("rel-was-sent");
							$(".sent_order").text("Отправить повторно ("+wasSent+")");
						}

						//-----Resize-----
						var h=$(window).height();
						var h1=h-250;
						h-=50;
						$('.send_window').css({'height':h+'px'});
						$('.sent_html').css({'height':h1+'px'});
					});
					$('.close_window, .icon_close').click(function(){
						$('body').css({'overflow':'auto'});
						$('.send_body').hide();
					});
					$(window).resize(function(){
						var h=$(window).height();
						var h1=h-250;
						h-=50;
						$('.send_window').css({'height':h+'px'});
						$('.sent_html').css({'height':h1+'px'});
					});

					$('.sent_order').click(function(){
						var where=$('.tab_send_towhere').val();
						var whom=$('.tab_send_whom').val();
						var sub=$('.tab_send_subject').val();

						var txt=$('.sent_html').html();
						var id=$(this).attr('rel');

						var sent=$('.sentt'+id+" .icon_sent");
						var countSent=sent.attr("rel-was-sent");
						countSent++;

						$.ajax({
							type:'POST',
							url: 'http://'+window.location.hostname+'/modules/commodities/ajax/ajax_send.php',
							data:{where:where, whom:whom, sub:sub, txt:txt, status_ob:1, id:id}
						}).done(function(dd){
							alert(dd);
							$('.send_body').hide();
							if(dd.indexOf('Отправил')!=-1)
							$('.sentt'+id).html('<div class=\'icon_sent\' rel-was-sent='+countSent+' ></div><span style=\'text-decoration:underline;color: rgb(248, 106, 5);\'>отправлен</span>');
						});
					});
					
					$('.sent_html').click(function(){
						$(this).attr('contenteditable','true');
					});						
					
					
					screen_w();
					$(window).resize(function(){
						screen_w();
					});

					$(".eachStatus").each(function(){
						var rel=$(this).attr("rel");
						var status=$(this).find("option:selected").val();
						// console.log("%s %s",rel,status);

						if(status!=1 && status!=2){
							$("#but22_tab"+rel+" .changeCommodity").attr("disabled",true);
						}

					});


					$('.tab_brenda').each(function(){
						var id=this.id.split('tab');
						var idd=this.id;
						var brendaId=$(this).find(".change_price_opt").attr("rel-brenda");

						var gr_set_count=0;
						var gr_set_sum=0;

						$(this).find('.gr_tab').each(function(){
							var sel=$(this).find('td:eq(16) select option:selected').val()
							// console.log("%s %s ", sel, id);
							if(sel!=2){
								gr_set_count+=parseInt($(this).find('td').eq(6).text());
								gr_set_sum+=parseInt($(this).find('td').eq(10).text());
							}
						});
						if(brendaId==48){
							gr_set_sum+=(gr_set_sum/100*0.5);
						}

						$('#gr_set_count'+id[1]).text(gr_set_count);
						$('#gr_set_summ'+id[1]).text(gr_set_sum);
					});

					$('.tab_brenda').each(function(){
						var id=this.id.split('tab');
						var rel=id[1];
						var brendaId=$(this).find(".change_price_opt").attr("rel-brenda");
						var vall=$(this).find(".change_price_opt").val();
						var getCount=parseInt($("#gr_set_count"+rel).text());

						var getOtRoz=$("#getOtgruzRoz"+brendaId).text();
						getOtRoz=parseInt(getOtRoz.replace("мин/ед",""));
						if(isNaN(getOtRoz) || getOtRoz==0){
							getOtRoz=1;
						}

						var getOtOpt=$("#getOtgruzOpt"+brendaId).text();
						getOtOpt=parseInt(getOtOpt.replace("мин/ед",""));
						if(isNaN(getOtOpt) || getOtOpt==0){
							getOtOpt=1;
						}

						if(getCount!=0){
							if(getCount<getOtOpt){
								var gr_set_sum=0;
								$("#but22_tab"+rel).each(function(i){
									var sel=$(this).find('td:eq(12) select option:selected').val()
									if(sel!=2){
										var count=parseInt($(this).find('td').eq(5).text());
										var grset=parseInt($(this).find('td').eq(7).attr("rel-price-roz"));
										$(this).find('td').eq(7).text(grset);
										$(this).find('td').eq(8).text(grset*count);
										gr_set_sum+=grset*count;
									}
								});

								$("#but22_tab"+rel).find(".change_price_opt option").removeAttr("selected");
								$("#but22_tab"+rel).find(".change_price_opt option").eq(0).attr("selected",true);
								$('#gr_set_summ'+rel).text(gr_set_sum);
							}
						}

						// if(vall==1){
						// 	var getOtRoz=$("#getOtgruzRoz"+brendaId).text();
						// 	getOtRoz=parseInt(getOtRoz.replace("мин/ед",""));
						// 	if(isNaN(getOtRoz) || getOtRoz==0){
						// 		getOtRoz=1;
						// 	}
						// 	alert(getCount+"="+getOtRoz);
						// }
						// if(vall==2){
						// 	var getOtOpt=$("#getOtgruzOpt"+brendaId).text();
						// 	getOtOpt=parseInt(getOtOpt.replace("мин/ед",""));
						// 	if(isNaN(getOtOpt) || getOtOpt==0){
						// 		getOtOpt=1;
						// 	}
						// 	alert(getCount+"="+getOtOpt);
						// }
						
						// var getCount=parseInt($("#gr_set_count"+rel).text());
						// alert(getCount+"="+);
					});


				});
				function screen_w(){
					var w=$(window).width();
					var ow=$('.w_brands').width();
					var t2w=$('.w_brands th:nth-child(3)').width();
					var t3w=$('.w_brands th:nth-child(4)').width();
					var t4w=$('.w_brands th:nth-child(5)').width();
					//$('.rees').text(t2w);
					
					if(w>=1100){
						$('.w_brands').css({'width':(w-180)+'px'});
						$('.open_line').css({'width':(w-205)+'px'});
						$('.tab').css({'width':(w-202)+'px'});
					//	$('.open_windows1').css({'width':(t2w+17)+'px'});
					//	$('.open_windows1 div div').css({'width':(t2w-34)+'px'});
					//	$('.open_windows2').css({'width':(t3w+15)+'px'});
					//	$('.open_windows2 div div').css({'width':(t3w-37)+'px'});
					//	$('.open_windows3').css({'width':(t4w-8)+'px'});
					//	$('.open_windows3 div div').css({'width':(t4w-57)+'px'});
					}else{
						$('.w_brands').css({'width':'1085px'});
						$('.tab').css({'width':'1060px'});
						$('.open_line').css({'width':'1063px'});
						// $('.open_windows1').css({'width':'216px'});
						// $('.open_windows2').css({'width':'268px'});
						// $('.open_windows3').css({'width':'406px'});
					}	
				}
				function close_win(){
					$('.br_cont, .br_us, .br_rez').animate({'max-height': '80px'},'slow');
					$('.open_cont, .open_us, .open_rez').removeClass('bu2');
					$('.open_cont, .open_us, .open_rez').addClass('bu1');
					$('.open_windows1, .open_windows2, .open_windows3').css({'z-index':'0', 'box-shadow': '0px 0px 0px'});
					$('.tin').fadeOut();
				}
				var stop_time;
				var i=0;
				function fun_rotate(aa, bb, s){
					//$('#bo2_'+rel).css({'transform':'rotate(25deg)'});
					if(bb==1){
						stop_time=setInterval(function(){
							fun.rotate1(aa);
						},s);
					}
					if(bb==2){
						stop_time=setInterval(function(){
							fun.rotate2(aa);
						},s);
					}
				};
				fun={
					rotate1: function(aa){
						$(aa).css({'transform':'rotate('+i+'deg)'});
						if(i>=180){
							clearInterval(stop_time);
						}
						i+=36;
					},
					rotate2: function(aa){
						$(aa).css({'transform':'rotate('+i+'deg)'});
						if(i<=0){
							clearInterval(stop_time);
						}
						i-=36;
					}
				}