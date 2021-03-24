<div class="block01 uk-flex uk-flex-middle" uk-height-viewport="offset-top: true;offset-bottom: true">
    <div class="uk-section uk-width-1-1">
        <div class="uk-container">
            <div class="uk-flex-middle uk-position-relative" uk-grid>
                <div class="uk-width-2-3@m">
                    <div class="uk-text-center">
                        <img src="images/Group4.png" alt="">
                    </div>
                </div>
                <div class="uk-width-2-5@m" id="dky" uk-toggle="cls: uk-position-center-right; mode: media; media: @m">
                    <div class="uk-text-center uk-margin mb-50-m">
                        <img src="images/VectorSmartObject221.png" alt="">
                    </div>
                    <div class="uk-flex-center uk-margin" uk-grid>
                        <div class="uk-width-4-5@m">
                            <div class="uk-card block01__card uk-card-body uk-card-default">
                                <form id="contact_form" name='registration'>
                                    <fieldset class="uk-fieldset">
                                        <div class="uk-margin">
                                            <input name="fname" id="fname" class="uk-input block01__input uk-border-rounded" uk-toggle="cls: uk-form-large; mode: media; media: @l" type="text" placeholder="Họ và tên">
                                        </div>
                                        <div class="uk-margin">
                                            <input name="fngaysinh" id="fngaysinh" class="uk-input block01__input uk-border-rounded" uk-toggle="cls: uk-form-large; mode: media; media: @l" type="date" placeholder="Ngày tháng năm sinh">
                                        </div>
                                        <div class="uk-margin">
                                            <input name="fphone" id="fphone" class="uk-input block01__input uk-border-rounded" uk-toggle="cls: uk-form-large; mode: media; media: @l" type="tel" placeholder="Số điện thoại">
                                        </div>
                                        <div class="uk-margin">
                                            <input name="femail" id="femail" class="uk-input block01__input uk-border-rounded" uk-toggle="cls: uk-form-large; mode: media; media: @l" type="email" placeholder="Email">
                                        </div>
                                        <div>
                                            <input type="submit" id="submit" class="uk-button block01__btn uk-button-secondary uk-width-1-1 uk-border-rounded" uk-toggle="cls: uk-button-large; mode: media; media: @l" value="Đăng ký tham gia" name="send"/>
                                            <!--
                                            <button type="submit" id="submit" class="uk-button block01__btn uk-button-secondary uk-width-1-1 uk-border-rounded" uk-toggle="cls: uk-button-large; mode: media; media: @l">Đăng ký tham gia</button>
                                            -->
                                        </div>
                                        <div>
                                            <div id="loader"></div>
                                            <span id="response"></span>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
  $(document).ready(function() {
    $("#submit").click(function() {
      var fname = $("#fname").val();
      var fngaysinh = $("#fngaysinh").val();
      var fphone = $("#fphone").val();
      var femail = $("#femail").val();
      var fsubject = 'Thông tin thành viên đăng ký mới';
      var button = $("#submit").val();
      var dataString = 'fngaysinh=' + fngaysinh + '&fname=' + fname + '&fphone=' + fphone + '&femail=' + femail + '&button=' + button + '&fsubject=' + fsubject;

      //validation
      if (fname == '' || fphone == '' || femail == '') { //if you are use other form validation scripts remove the if statement
        // alert("Please fill all fields");
      }
      // AJAX Code To Submit Form.
      else {
        $('#loader').show();
        $.ajax({
          type: "POST",
          url: "send-mailer.php",
          data: dataString,
          cache: false,
          success: function(result) {
            $('#loader').hide();
            $('#response').html(result).fadeIn();
            $("#contact_form")[0].reset();
            $('#response').fadeOut(3000).delay(400);


          }
        });
      }
      return false;
    });
  });

  // Wait for the DOM to be ready
  $(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        fname: "required",
        femail: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        fphone: {
          required: true,
          minlength: 10
        }
      },
      // Specify validation error messages
      messages: {
        fname: "Please enter your name",
        fphone: {
          required: "Please provide a phone",
          minlength: "Your phone must be at least 10 characters long"
        },
        femail: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
</script>