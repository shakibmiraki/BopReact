/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styles from "./index-style";
import { useTranslation } from "react-i18next";
import { Header, SquaredBackground } from "./../../components/Share/lib";
import Zoom from "react-reveal/Zoom";
import { config } from "../../config";
import { SecondaryText } from "../../components/Share/styled-component";
import { GenderRadioWithError } from "./../../components/Form/gender";
import { Formik } from "formik";
import { Form } from "formik";
import * as Yup from "yup";
import { Slider } from "./../../components/Share/slider";
import { OneColumnTickableItem } from "./../../components/Share/oneColumnTickableItem";
import { componentService } from "../../services/component";
import { SelectableItem } from "./../../components/Form/selectable-item";
import { BopCalendar } from "./../../components/Form/calendar";
import { BopPopup } from "./../../components/Form/calendar-popup";
import { Button } from "./../../components/Share/lib";
import { themes } from "./../../constants/theme";
import { themeService } from "./../../services/theme";
import { setActiveTheme } from "./../../actions/theme";
import { useDispatch } from "react-redux";
import { LanguageSelector } from "./../../components/LanguageSelector/index";

const Schema = Yup.object().shape({});

export const Components = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="container" css={css(styles)}>
      <SquaredBackground />
      <Header text={t("about_us.title.about_us")} back />
      <Zoom duration={config.animationDuration}>
        <Formik
          initialValues={{ gender: "", amount: "", selected: "", calendar: null }}
          validationSchema={Schema}
          onSubmit={(values, { resetForm }) => {}}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <section className="mt-5">
                <SecondaryText className="text-center">Themable Header</SecondaryText>
                <Header text={"عنوان صفحه"} />
              </section>

              <section className="mt-5">
                <SecondaryText className="text-center">Gender</SecondaryText>
                <GenderRadioWithError />
              </section>

              <section className="mt-5">
                <SecondaryText className="text-center">Themable Selectable Items</SecondaryText>
                <div className="row">
                  {componentService.fetchList2().map(function (item, i) {
                    return (
                      <div className="col-6" key={item.id}>
                        <SelectableItem
                          rounded
                          padding="p-2"
                          className="rounded-circle img-rounded image-size"
                          active={values.selected === item.id}
                          onClick={() => setFieldValue("selected", item.id)}
                        >
                          آیتم 1
                        </SelectableItem>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="mt-5">
                <SecondaryText className="text-center">Slider</SecondaryText>
                <div>
                  <Slider>
                    {componentService.fetchList1()?.map(function (item, i) {
                      return (
                        <OneColumnTickableItem
                          key={item.amount}
                          text={new Intl.NumberFormat("fa", {
                            style: "currency",
                            currency: "IRR",
                          }).format(item.amount)}
                          active={values.amount === item.amount}
                          onClick={() => setFieldValue("amount", item.amount)}
                        />
                      );
                    })}
                  </Slider>
                </div>
              </section>

              <section className="mt-5">
                <SecondaryText className="text-center">Calendar</SecondaryText>
                <div>
                  <BopCalendar name="calendar" />
                </div>
              </section>

              <section className="mt-5">
                <SecondaryText className="text-center">Popup</SecondaryText>
                <div>
                  <Button
                    type="button"
                    onClick={() => setFieldValue("modal", true)}
                    text={t("components.button.label.show_modal")}
                  />

                  <BopPopup name="modal">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                      </div>
                    </div>
                  </BopPopup>
                </div>
              </section>

              <section className="mt-5">
                <SecondaryText className="text-center">Themes</SecondaryText>
                <div className="row">
                  {Object.keys(themes).map(function (key) {
                    return (
                      <div className="col-4 max-width" key={themes[key].name}>
                        <SelectableItem
                          padding="p-2"
                          rounded
                          active={themeService.getThemeName() === themes[key].name}
                          onClick={() => {
                            themeService.setThemeName(themes[key].name);
                            dispatch(setActiveTheme());
                          }}
                        >
                          <span>{themes[key].name}</span>
                        </SelectableItem>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="mt-5 mb-5">
                <SecondaryText className="text-center">Themes</SecondaryText>
                <div>
                  <LanguageSelector />
                </div>
              </section>
            </Form>
          )}
        </Formik>
      </Zoom>
    </div>
  );
};
