import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExceptionExceptionFilter } from './common/exception-filter/exception-filter.filter';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ExceptionExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    }),
  );

  app.useGlobalInterceptors(new ResponseInterceptor());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Doctor Appoinment Booking-API')
    .setDescription('Doctor Appoinment Booking APIs` documentation')
    .setVersion('1.0')
    .setContact('Surya', '', 'suryakumarraju.epuri@hcl.com')
    .addBearerAuth({ type: 'http', bearerFormat: 'JWT', scheme: 'bearer', name: 'header', in: 'header' }, 'Swagger-authorization')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('appoinment', app, document);

  await app.listen(3000);
}
bootstrap();
