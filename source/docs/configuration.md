title: 集成教程
---
# SpringMVC方式

> 在进行配置之前，请确保MP本地和其依赖包都已配置好!

```xml spring-mybatis.xml
<!-- MyBatis SqlSessionFactoryBean 配置 -->
<!-- 注意：这里使用的是MP的MybatisSqlSessionFactoryBean，而不是Mybatis的，因为MP需要进行相应代理 -->
<bean id="sqlSessionFactory" class="com.baomidou.mybatisplus.spring.MybatisSqlSessionFactoryBean">
    <!-- 配置数据源 -->
    <property name="dataSource" ref="dataSource" />
    <!-- 配置Mybatis配置文件 -->
    <property name="configLocation" value="classpath:xml/mybatis-config.xml" />
    <!-- 配置别名包路径 -->
    <property name="typeAliasesPackage" value="xxx.entity" />
    <!-- 配置Mapper扫描路径（IDEA系列编辑器需要特别注意，因为IDEA的设置问题，src中的xml文件是不会被编译的，如果放在src中可能会报错，解决办法详见 常用问题-Invalid bound statement (not found) 错误如何解决?） -->
    <property name="mapperLocations" value="classpath:com/xx/mapper/xml/*Mapper.xml" />
    <!-- 插件配置项  -->
    <property name="plugins">
        <array>
            <!-- 分页插件配置 -->
            <bean id="paginationInterceptor" class="com.baomidou.mybatisplus.plugins.PaginationInterceptor">
                <property name="dialectType" value="mysql" />
            </bean>
        </array>
    </property>
    <!-- 全局配置注入 -->
    <property name="globalConfig" ref="globalConfig" />
</bean>
<bean id="globalConfig" class="com.baomidou.mybatisplus.entity.GlobalConfiguration">
    <!-- 
		AUTO->`0`("数据库ID自增")
	 	INPUT->`1`(用户输入ID")
		ID_WORKER->`2`("全局唯一ID")
		UUID->`3`("全局唯一ID")
	-->
    <!-- <property name="idType" value="0" /> -->
	<!--
		MYSQL->`mysql`
		ORACLE->`oracle`
		DB2->`db2`
		H2->`h2`
		HSQL->`hsql`
		SQLITE->`sqlite`
		POSTGRE->`postgresql`
		SQLSERVER2005->`sqlserver2005`
		SQLSERVER->`sqlserver`
	-->
	<!-- Oracle需要添加该项 -->
    <!-- <property name="dbType" value="oracle" /> -->
    <!-- 全局表为下划线命名设置 true -->
    <!-- <property name="dbColumnUnderline" value="true" /> -->
    <property name="sqlInjector" ref="autosqlinjector"/>
</bean>
<bean id="autosqlinjector" class="com.baomidou.mybatisplus.mapper.AutoSqlInjector"/>

<!-- 配置Mapper扫描路径 -->
<bean id="mapperScannerConfigurer" class="org.mybatis.spring.mapper.MapperScannerConfigurer">
    <property name="basePackage" value="xxx.mapper" />
</bean>
```

# SpringBoot形式

文档待补充，可先行查看Demo：[Github](https://github.com/baomidou/mybatisplus-spring-boot)、[OSC](http://git.oschina.net/baomidou/mybatisplus-spring-boot)
